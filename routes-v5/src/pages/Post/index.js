import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom.min";

/* export default function Post() {
    const params = useParams();
    const { search } = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    console.log(params);
    console.log(queryParams.get('meuQueryParam'));

    return <h1>Post page</h1>;
} */

//FORMA EM COMPONENTE DE CLASSE
export default class Post extends React.Component {
    constructor(props) {
        super(props);

        const { search } = this.props.location;
        this.queryParams = new URLSearchParams(search);
    }

    handleNavigate = () => {
        this.props.history.push('/posts');
    }
    
    render() {
        //console.log(this.props.match.params);
        //console.log(this.props.location.search);

        console.log(this.queryParams.get('meuQueryParam'));

        return (
            <>
                <button onClick={this.handleNavigate}>Voltar para a lista de posts</button> 
                <h1>Post page</h1>
            </>
        );
    }
}