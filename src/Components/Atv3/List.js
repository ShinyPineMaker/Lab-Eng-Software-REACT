import React from "react";

const people = [
    {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations', 
    imageId: 'MK3eW3A'
    }, 
    {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole', 
    imageId: 'mynHUSa'
    }, 
    {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
    }, 
    {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids',
    imageId: '10jWm71'
    }, 
    {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx81'
    }
        

];

const List = () => {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

    const listItems = chemists.map(
        person =>
            <li>
                <p>
                    <b>{person.name}: </b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
    );

    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default List;