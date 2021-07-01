import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

/**
 * # mapStateToProps, mapDispatchToProps 두 함수 return value는
 *      Container class component의 props로 넘기기 때문에
 *      this.props에서 확인 가능하다.
 *      (이게 react-redux 모듈을 통해서 가능한 것임.)
 */
/**
 * mapStateToProps
 *  * 역할: store가 업데이트가 될때 마다 자동적으로 호출해 component에 store의 결과값을 component로 전달한다.
 *       : store 업데이트 되는 시점 - redux에서 function reducer 파일에서 return 할때 
 *  * 사용방법: connect함수의 첫번째 parameter로 사용
 * @param {*} state 
 * @param {*} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
	const { photos: { feed } } = state;
	console.log('### Feed > index.js > mapStateToProps > state arguments: ', state);
	console.log('### Feed > index.js > mapStateToProps > ownProps arguments: ', ownProps);
	return {
		feed
	};
};

/**
 * mapDispatchToProps
 *  * 역할: component에서 store의 상태를 바꾸기 위해 사용
 *  * 역할원리: component에 redux dispatch를 전달후 component에서 dispatch 하면서 store변경
 *  * 사용방법: connect함수의 두번째 parameter로 사용
 * @param {*} dispatch 
 * @param {*} ownProps 
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	console.log('### Feed > index.js > mapDispatchToProps > photoActions.getFeed() arguments: ', photoActions);
	console.log('### Feed > index.js > mapDispatchToProps > ownProps arguments: ', ownProps);
	return {
		getFeed: () => {
			// dispatch(api action)
			dispatch(photoActions.getFeed());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

/*
    # react-redux라이브러리의 connect 객체에대한 생각
    react-redux = {
        connect: (mapStateToProps: function, mapDispatchToProps: function) => {

            const returnMapStateToProps = mapStateToProps(state, OwnProps){
                return returnValue
            }

            //dispatch: redux
            //ownProps: component Props
            const returnMapDispatchToProps = mapDispatchToProps(dispatch, ownProps){

                return returnValue
            }

            return (Container: component) => {
                //Container component에 'returnMapStateToProps' props를 전달
                //closure영역에 선언되어 있는 두변 수(returnMapStateToProps', 'returnMapDispatchToProps')를
                //nest function으로 받은 Container(component)에 props로 전달해준다.
                return <Container returnMapStateToProps>;
            }

        }
    }
 */
