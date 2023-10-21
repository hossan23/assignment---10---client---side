import { useLoaderData, useParams } from 'react-router-dom';
import DetailsPageCom from './DetailsPageCom';

const DetailsPage = () => {
 const allData = useLoaderData();
 const { _id } = useParams();

 const allDetails2 = allData.filter(data => data._id == _id);

 return (
  <div>
   {allDetails2.map(detail => (
    <DetailsPageCom key={detail._id} detail={detail}></DetailsPageCom>
   ))}
  </div>
 );
};

export default DetailsPage;
