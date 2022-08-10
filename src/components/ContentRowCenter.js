import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import {Route} from 'react-router';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <Route exact path="/lastmovie" component={LastMovieInDb}/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Route exact path="/genres" component={GenresInDb}/>

        </div>
    )
}

export default ContentRowCenter;