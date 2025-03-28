import PropTypes from 'prop-types';

export function Member() {}
function TypeProp(props) {
    console.log(props);
    return <p>결과는 콘솔에서 확인하기 바란다.</p>;
}

TypeProp.propTypes = {
    prop1: PropTypes.instanceOf(Member),
};

export default TypeProp;