const handleColorCard = (type: string) => {
  switch (type.toUpperCase()) {
    case 'MONSTERS': return'#FF8B53';
    case 'SPELLS': return'#1D9E74';
    case 'TRAPS': return'#8B66AB';
    default: return '#FFF';
  }
}

export default handleColorCard