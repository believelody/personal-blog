import React, { Component } from 'react';
import './Work.css';

class Work extends React.Component {
  click = () => {
    //this.props.handleClick(this.props.index);
  }
  render() {
    return(
      <div className="work">
        <section>
          <h3>Titre contenu</h3>
          <span><img src={require('./img/img.png')} alt="image" /></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget iaculis nisi, eget dignissim ante. Morbi faucibus a orci et congue. Etiam nibh tellus, pretium ut nulla nec, vulputate rhoncus mauris. Sed rutrum euismod nisi, in mattis est. Etiam posuere posuere lectus, nec commodo magna dapibus in. Morbi elementum felis id eros venenatis, non condimentum dolor varius. Pellentesque pretium euismod augue, et efficitur orci tincidunt sed. Vestibulum placerat diam non posuere vestibulum. Nam et velit sapien. Sed nec orci non tellus pellentesque tincidunt vitae lobortis tortor.
          </p>
          <a href="#">En savoir plus</a>
        </section>
        <section>
          <h3>Titre contenu</h3>
          <span><img src={require('./img/img.png')} alt="image" /></span>
          <p>
            Pellentesque bibendum venenatis lacus, in consectetur ipsum euismod a. Mauris vulputate, nunc auctor malesuada sagittis, dui justo efficitur nulla, sit amet consectetur magna lectus eget odio. Ut lorem massa, consectetur in egestas vel, volutpat volutpat turpis. Duis erat purus, vulputate id odio non, suscipit placerat ex. Vivamus laoreet posuere est eget molestie. Phasellus vel tristique tellus. Ut gravida lacinia eros at pretium. Duis iaculis a ex vel iaculis. Donec convallis risus vehicula tortor molestie, vitae bibendum nisl tempus. Cras aliquet sed magna vel elementum. Aliquam eget commodo neque, pellentesque malesuada ante.
          </p>
          <a href="#">En savoir plus</a>
        </section>
        <section>
          <h3>Titre contenu</h3>
          <span><img src={require('./img/img.png')} alt="image" /></span>
          <p>
            Curabitur ut nibh vel dolor mattis condimentum quis eu sapien. Quisque id blandit dui. Vivamus feugiat urna quis auctor consectetur. Curabitur quam velit, commodo vel scelerisque et, dictum scelerisque ante. Quisque dictum risus imperdiet ipsum pellentesque lobortis. Fusce tristique, urna non malesuada faucibus, purus tortor imperdiet tellus, et commodo lacus risus sed odio. Aliquam pulvinar ipsum sed risus tincidunt euismod eget non nisi. Sed ac fringilla odio, quis tincidunt nisl. Ut blandit lectus ultricies, lobortis ex vel, laoreet quam. In vel lorem libero. Ut pretium, leo quis venenatis suscipit, massa quam cursus ligula, vitae elementum lorem velit eget tellus.
          </p>
          <a href="#">En savoir plus</a>
        </section>
        <section>
          <h3>Titre contenu</h3>
          <span><img src={require('./img/img.png')} alt="image" /></span>
          <p>
            Fusce lorem velit, rutrum eget faucibus non, congue sed ex. Quisque ac tristique nisi. Curabitur aliquam malesuada quam at efficitur. Ut elementum nisl dolor, quis consectetur neque luctus nec. Vestibulum nec posuere metus, vitae ultrices ex. Morbi sit amet urna ultrices, ullamcorper mauris et, ullamcorper mauris. Maecenas maximus mauris eu imperdiet vulputate. Vivamus dapibus felis arcu, ultricies volutpat orci rutrum nec.
          </p>
          <a href="#">En savoir plus</a>
        </section>
      </div>
    );
  }
}
export default Work;
