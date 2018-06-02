import React from 'react';


class PaginationList extends React.Component
{
    constructor(props)
    {
        super(props)
        
        this.state ={listofIndex:[],pageIndex:1}

        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    handlePaginationClick(event)
    {
        event.preventDefault();
        this.setState({pageIndex:Number(event.target.innerHTML)})
        this.props.actions.GetIndex(Number(event.target.innerHTML),this.props.Grid.pageSize,this.props.Grid.count);
    } 

    render ()
    {

        const numberOfpages = this.props.Grid.listofIndex.map(page=><il key={page} className="page-link" onClick={this.handlePaginationClick}>{page}</il>) /* <button type='submit' ></button> */
        
        return <nav aria-label="Page navigation example">
                <ul className="pagination">           
                    {numberOfpages}       
                </ul>
                </nav>
        
    }
}


export default PaginationList;