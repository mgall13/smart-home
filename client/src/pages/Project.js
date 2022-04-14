import React from 'react';
import {useQuery} from '@apollo/client'
import { QUERY_PROJECT } from '../utils/queries';
import {useParams} from 'react-router-dom'
import Auth from '../utils/auth'
import OfferForm from '../components/OfferForm'


const Project = (props) => {
    const {id:projectId} = useParams();
    const loggedIn =Auth.loggedIn();

    const{loading, data} = useQuery(QUERY_PROJECT,{
        variables:{id:projectId}
    });
    const project = data?.project || {};
    if(loading) {
        return<div>Loading....</div>
    }
    return(
        <div>
            <div className='card mb-3'>
                <p className='card-header'>
                    <span style={{ fontWeight:500}} className="text-light">
                        Project Owner: {project.YourName}
                    </span>
                </p>
                <div className='card-body'>
                    <p>project Description: {project.projectDescription}</p>
                    <p>project Materials: {project.projectMaterials}</p>
                    <p>init Price: {project.initPrice}</p>
                </div>
                <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <OfferForm />
            </div>
        )}
      </div>

            </div>
        </div>
    );
};
export default Project;