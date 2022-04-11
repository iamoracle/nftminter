import React from "react";

import {useContractKit} from "@celo-tools/use-contractkit";

const Header = () => {

  const {connect} = useContractKit()
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#jump">
            Lottery Dapp
          </a>
          <button onClick={() => { connect().catch(e => console.log(e)) }} className="btn btn-light">Connect</button>
        </div>
      </nav>
    );
}

export default Header
