import React, { Component } from 'react'

class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSection: null
  }

  handleClick = (sectionIndex) => {
    this.setState({ activeSection: sectionIndex })
  }

  renderItem(section, index, activeSection) {
    return (
      <li>
        <button
        type="button"
        onClick={() => this.handleClick(index)}
        >
          {section.title}
        </button>
        {(activeSection === index && <p>{section.content}</p>)}
      </li>
    );
  }

  render() {
    const { activeSection } = this.state;
    const { sections } = this.props;

    return (
      <div>
        <ul className="Accordion">
          {sections.map((section, index) => 
            this.renderItem(section, index, activeSection)
          )}
        </ul>
      </div>
    );
  }
}

export default Accordion;
