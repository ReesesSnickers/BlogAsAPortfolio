import React from 'react'

import ConstateWrapper from '../wrappers/constateWrapper';


const Home = () => (
    <div>
        <ConstateWrapper>
        {({ count, test }) => <div onClick={test}> Hello my dude {count}</div>}
        </ConstateWrapper>
    </div>
)

export default Home