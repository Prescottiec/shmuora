import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) =>{
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);