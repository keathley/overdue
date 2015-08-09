import React, { PropTypes } from 'react'
import ajax from 'reqwest'

const Book = React.createClass({
  getInitialState: function() {
    return {
      preview: '',
      title: '',
      info: ''
    };
  },
  componentDidMount() {
    ajax({
      url: this.url(this.props.code),
      type: 'jsonp'
    })
    .then( this.handleSuccess )
    .fail( this.handleFailure )
  },

  url(isbn) {
    return `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&callback=handleSuccess`
  },

  handleSuccess(resp) {
    console.log(this.props.code);
    console.log(resp);

    var values    = _.values(resp)[0]
      , preview   = values.cover.medium
      , info      = values.url
      , title     = values.title

    this.setState({
      preview: preview,
      info: info,
      title: title
    })
  },

  handleFailure(errors, msg) {
    console.error('errors', msg, errors);
  },

  render () {
    return (
      <div className='book'>
        <img src={ this.state.preview } alt="book thumbnail"/>
        <a href={ this.state.info }>{ this.state.title }</a>
      </div>
    )
  }
})

export default Book
