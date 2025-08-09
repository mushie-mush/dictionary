/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IDefinition, IDictionaryEntry } from '../types';

function buildAudioUrl(audio: string): string {
  const subdir = audio.startsWith('bix')
    ? 'bix'
    : audio.startsWith('gg')
    ? 'gg'
    : /^[0-9]/.test(audio[0])
    ? 'number'
    : audio[0];
  return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdir}/${audio}.mp3`;
}

export const parseMWResponse = (entry: any): IDictionaryEntry | null => {
  if (!entry) {
    return null;
  }

  const pronunciation = entry.hwi?.prs?.[0]?.mw;
  const audio = entry.hwi?.prs?.[0]?.sound?.audio;
  const audioUrl = audio ? buildAudioUrl(audio) : undefined;

  const definitions: IDefinition[] = [];

  if (Array.isArray(entry.def)) {
    entry.def.forEach((defBlock: any) => {
      defBlock.sseq.forEach((senseSeq: any) => {
        senseSeq.forEach((sense: any) => {
          if (sense[0] === 'sense') {
            const senseObj = sense[1];
            let text: string | undefined;
            let example: string | undefined;

            senseObj.dt.forEach((dtItem: any) => {
              if (dtItem[0] === 'text') {
                text = dtItem[1].replace(/{.*?}/g, '');
              }
              if (dtItem[0] === 'vis' && dtItem[1][0]?.t) {
                example = dtItem[1][0].t.replace(/{.*?}/g, '');
              }
            });

            if (text) {
              definitions.push({ text, example });
            }
          }
        });
      });
    });
  }

  return {
    id: entry.meta?.id || '',
    word: entry.hwi?.hw?.replace(/\*/g, '') || '',
    pronunciation,
    audioUrl,
    partOfSpeech: entry.fl || '',
    definitions,
    stems: entry.meta?.stems || [],
    synonyms: entry.meta?.syns ? entry.meta.syns.flat() : [],
    isOffensive: entry.meta?.offensive || false,
  };
};
