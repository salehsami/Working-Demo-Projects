import {useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

function EmployeeLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>Employee Portal</h1>
        <p>Login to your Account</p>
      </section>
      <section >
      <div class="icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAACACAMAAABEM3WOAAAAaVBMVEX39/cAAAD4+Pj////p6ekxMTELCwvu7u4WFhaWlpbU1NT7+/tRUVHx8fHZ2dkbGxt8fHyFhYXg4OB2dnZWVladnZ3Nzc1tbW2ysrI5OTm8vLwmJiakpKRhYWEsLCxmZmaNjY1ISEhAQEBtbhFNAAAD1UlEQVRoge2aa3ejIBCGcQajDV6iVWOUpJf//yNXGLRpK4qm53R3D/PFE8WHYRhQ3wlj/42Bsh+jCURMecnT4SgexwFiVleHQNmhqjPEx1wFTOs8uLe8Th9hCvYUfLcntnvs2FxmgEFwaXAnUN5Rbpfb3S+5Bwl4Gu8/dxyV8e48njrtCCY+j2FLUdDtIDAdA/u82Us0t77wT94A8hfT0UYkdnRf/W10MIa324SEiHK6nbsLW8r3aEso8bw0pcbL8wYnRWMm1NYhpUHjnulYqRtCZhsWsFA1qJydhHIt9GbiStdIYqHX2pIHqNdn4eokkotLURLkpCNRHB1aU69Ht7mh5FhZZrRIHXcM1OusXe5e6DR/cSTeHOaR8uHmRATQz4F0hZiqRrlwyR+IYtXWmt6mFVP9xk5rG7jaJcKVxzOAWjYH7ome6Ime6Ime+HtE0J9om4lg/bKD9KkYWmwlAi+eLA939XaS42Yi5ta3FaFIEWwkQqSO8y9JIt5NjD3REz3REz3RE3+PmKpjvPo1rFulLkQm+uHo9sXeC+ZCRC04ZSs6RaYahehG1DKck/JxdiRK03jJqFvpRgQ9oGBR1ACh22TgRDR606yaOblIqiayZWI+El9V62UlTs/e60jMLUSl1ynhyKiFC04aF/nY+DJPxGtgFD0Ke2xNSVoENHla5bta5NnCDMQk2/CeOY8EUtYoZXWILEKk7q3X14xQa9G8jVZOMi/2gVWr1DEmSZGULiWHzwFrfY0ULhIrbWKXHgyFBEltHvz42rsY6w1UANHBt4qGJFqTJj0q82/ZJ6bA7J0ukJh5f8ssMlGZQPsYJaVyM0MUw24JIBCzsSCiZ3BoqTIusW8B1KPRW3GqHyWy4Uww3shkPGXmjLTXJaWdWozN2+DD4jy++9Xed7qo+ILOhQFJA+dvwZy9cRoyAfvl4o/gFDsh6J62/8brW0IIQTHlKwo2khielGZcrK0+8aqWmSslBfW4Kg6PmVijGZrg7SlR21KenFouTEBMmjsAVec0B7fOfOWqrBnShw7UC3ZUmYtLJ/lawJX6z2WEU9UMpuoZRtLUOa/gWKEZJuRgwnaVpS7gkqmSbilNf8Gh3VDiQ15McxFWheya4/HYdLKowul8wbeVzrCcCpCzdio31yABUxlacKHcVyAeprSU1dcU7ytZPlDEHqAs6+rTVW0xl+up7jL2aE18SBc1xTXl/DDpP/RvAL0nbK20eqIneqIn/q9EEJMZ4seJXfsuRO/JaPqhGlbT7/dN/yCZiHzh4epUT/gXiYwd7baLp95irbaT+LfYH4YDObKIo5VGAAAAAElFTkSuQmCC" alt="Voice icon"/>
        </div>
        <div><br />
        </div>
        <div class="box">
          <p>
            Read the text after clicking the microphone<br/>
            Make sure to enunciate each word properly and pause briefly between each word
      </p>
      <p>Welcome to the employee voice login system. With this innovative technology, you can securely log in to your account with just your voice. Our advanced voice recognition software can extract unique patterns and characteristics from your voice to ensure that only you can access your account. Say your name clearly to get started</p>
      
    </div>
      </section>
      <section className="heading">OR</section>
      <section className="form">
        <form onSubmit={onSubmit}>
                   
            <div className="form-group">
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={onChange}/>
          </div>
          
          <div className="form-group">
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={onChange}/>
          </div>

          <div className="form-group">
            <button type = "submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    
    </>
  )
}


export default EmployeeLogin