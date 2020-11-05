import React from 'react';

export default class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props)
        this.state = {
            names: ['Linc', 'Henry', 'Amy', 'Paul']
        }
    }
render() {
    return <ul className="list-group">
        {this.state.names.map(name => {
            return <li className="list-group"></li>    
             })}
    </ul>
}

}

interface IListProps {

}

interface IListState {
    names: Array<string>;
}