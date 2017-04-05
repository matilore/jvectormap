import React from 'react'
import $ from 'jquery'

class Map extends React.Component {

  componentDidMount(){


    this.$node = $(this.refs.map);
    //associate the jquery method to the node passing by the window object to connect
    //WHY THE vectorMap METHOD OF JQUERY OBJECT DISSAPEARS WHEN THE COMPONENT IS RENDERIZED?
    this.$node.vectorMap = window.vectorMap
    this.$node.vectorMap({map: 'world_en' });
  }

  render () {
    return (
      <div>
      <div id="map" ref='map' style={{width: "1000px", height: "600px"}}></div>
    </div>
    )
  }
}

export default Map;
