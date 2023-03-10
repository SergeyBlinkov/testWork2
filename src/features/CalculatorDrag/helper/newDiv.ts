export const newDivCreate = (w?: number, h?: number) => {


    const active = document.createElement('div');
    active.style.display = 'flex';
    active.style.backgroundColor = 'rgba(93,95,239,0.6)';
    active.style.width = w + 'px';
    active.style.height = '5px';
    active.style.transition = 'all 0.5s';
    active.id = `newDiv`;
    active.style.scale = '1';
    active.style.borderRadius = '6px';
    //
    return active;
    //OBJECT STYLE

};