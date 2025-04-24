import PropTypes from 'prop-types';

export function Member() {}
function TypeProp(props) {
    console.log(props);
    return <p>결과는 콘솔에서 확인하기 바란다.</p>;
}

TypeProp.propTypes = {
    prop1: PropTypes.instanceOf(Member),
    prop2: PropTypes.oneOf(['남성', '여성', '기타']),
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    prop4: PropTypes.arrayOf(PropTypes.number),
    prop5: PropTypes.objectOf(PropTypes.number),
    prop6: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['남성', '여성', '기타']),
    }),
    prop7: PropTypes.exact({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['남성', '여성', '기타']),
    }),
};

export default TypeProp;