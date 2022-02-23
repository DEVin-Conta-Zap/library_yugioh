const handleColorCard = (type: string) => {
  switch (type.toUpperCase()) {
    case 'MONSTERS': return'bg-monster';
    case 'SPELLS': return'bg-spell';
    case 'TRAPS': return'bg-trap';
    default: return '#FFF';
  }
}

export default handleColorCard