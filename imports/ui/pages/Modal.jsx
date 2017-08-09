import React from 'react';
import PropTypes from 'prop-types';


export default class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

const styles = {
    backdrop: {
      position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0,0,0,0.3)', padding: '50px'
    },
    modal: {
      backgroundColor: '#fff', borderRadius: '5px', maxWidth: '500px', minHeight: '300px', padding: '30px', margin: 'auto',
      textAlign:'center', fontSize: '60px'
    }
};


    return (
      <div style={styles.backdrop}>
        <div style={styles.modal} >
          {this.props.children}
          <br />
          <br />
          <div>
            <button onClick={this.props.onClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
