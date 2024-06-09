

import yaml from 'yaml';
export const getTarotData = () => {
    const data = yaml.parseDocument('./data/tarot.yaml')
    return data;


}

