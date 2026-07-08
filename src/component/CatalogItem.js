import React from "react";
import {FaBookmark, FaRegBookmark} from "react-icons/fa";



class CatalogItem extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                image: this.props.book[0],
                title: this.props.book[1],
                author: this.props.book[2],
                publisher: this.props.book[3],
                year: this.props.book[4],
                bookmark: false
            }

            this.check_bookmark = this.check_bookmark.bind(this);
        }

        check_bookmark() {
            this.setState({bookmark: !this.state.bookmark});
        }

        render(){
            return(
                <div className="card text-center">
                        <div className="card-body">
                            <img src={`img/${this.state.image}`}
                             width="150px"  alt="{this.state.title}"
                             height="200px"
                            style={{marginBottom:"10px"}}/>
                            <h5 className="card-title title">{this.state.title}</h5>
                            <p className="card-text author">{this.state.author}</p>
                            <p className="card-text text-muted publisher">{this.state.publisher}
                                <small className="year">{this.state.year}</small>
                            </p>
                        </div>
                        <div className="card-footer text-muted d-flex">
                            <p className="flex-grow-1 text-start">
                                {this.state.bookmark ? "Bookmark!" : ""}
                            </p>

                            <p className="text-end" onClick={this.check_bookmark}>
                                {this.state.bookmark ? <FaBookmark/> : <FaRegBookmark/>}    
                            </p>
                        </div>
                </div>
            )
        }
}

export default CatalogItem;