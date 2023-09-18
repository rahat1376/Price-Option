import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
const{name,price,features} = option;
    return (
        <div className='bg-black flex flex-col text-white rounded-lg p-6'>
            <h2 className='text-center'>
                <span className='text-6xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            <div className='flex-grow pl-12 mt-4'>
            {
                features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-500 rounded-lg font-bold text-xl w-full py-2 mt-10 hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object,
}
export default PriceOption;