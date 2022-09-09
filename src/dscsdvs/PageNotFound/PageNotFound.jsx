import { Btn, Img, WraperImg } from './PageNotFound.styled';
import notFound from '../../images/notFound.png';

const PageNotFound = () => {
  return (
    <div>
      <Btn to="/">Go home Yankee</Btn>
      <WraperImg>
        <Img src={notFound} alt="Page not found" />
      </WraperImg>
    </div>
  );
};

export default PageNotFound;
