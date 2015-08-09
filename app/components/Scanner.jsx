import React from 'react'
import Quagga from 'quagga'
import _ from 'lodash'
import Book from './Book'

const Scanner = React.createClass({
  quarraOpts: {
    inputStream: {
      size: 800,
      singleChannel: false
    },
    locator: {
      patchSize: "medium",
      halfSample: false
    },
    numOfWorkers: 1,
    decoder: {
      readers: ["ean_reader"]
    },
    locate: true,
    src: null
  },

  getInitialState: function() {
    return { codes: [] }
  },

  componentDidMount() {
    Quagga.onProcessed( (result) => {
      console.log('processed');
    })
    Quagga.onDetected( (result) => {
      console.log('detected');
      var code = result.codeResult.code
      this.setState({ codes: this.state.codes.concat([code]) })
    })
    this.url = window.URL || window.webkitURL || window.mozURL || window.msURL
  },

  handleFileChosen(e) {
    console.log('chosen');
    var file = e.currentTarget.files[0]
      , src = (this.url.createObjectURL(e.currentTarget.files[0]))
      , config = _.extend({}, this.quarraOpts, {src: src})

    console.log('chosen file', config);

    Quagga.decodeSingle(config, function(result) {});
  },

  render() {
    var codes = this.state.codes.map( code => <Book code={ code } key={ code } /> )

    return (
      <div className='scanner'>
        <input type="file" capture onChange={ this.handleFileChosen } />
        { codes }
      </div>
    )
  }
})

export default Scanner
