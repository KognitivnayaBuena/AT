import React from 'react'


export default function SubSearch(){
    return(
        <div className="sub_search_block">
           <p>Статус</p>
            <select>
                <option>Студент</option>
                <option>Преподаватель</option>
                <option>Работник</option>
            </select>
            <p>Дата</p>
            <input type="date" placeholder="Введите начальную дату" className="sub_search_first" />
            <input type="date" placeholder="Введите конечную дату" className="sub_search_second" />
            <button className="sub_search_block_button2">Выбрать</button>
        </div>       
    )

}