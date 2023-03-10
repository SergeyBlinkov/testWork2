import MountainPicture from '../../assets/MountainPicture.svg';
import React from 'react';

export const EmptyText = () => {
    return (
        <section
            className={'emptyText w-[120px] h-[100px] top-[40%] relative flex items-center justify-center gap-2 flex-col'}
            id={'emptyText'}>
            <img src={MountainPicture} alt={'mountain'} />
            <article className={'flex flex-col items-center'}>
                <h3 className={'text-[#5D5FEF] text-base'}>Перетащите сюда</h3>
                <p className={'text-sm w-[102px] text-center'}>любой элемент из левой таблицы</p>
            </article>
        </section>
    );
};