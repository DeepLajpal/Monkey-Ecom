import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h3 className="common-heading">Contact Us</h3>
      <iframe
        title="Taj Mahal"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4005559853904!2d78.03727128026958!3d27.175144715877206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1688569917612!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgwggbr"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              placeHolder="username"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="Email"
              placeHolder="email"
              autoComplete="off"
              required
            />
            <textarea
              type="textarea"
              name="Message"
              cols="30"
              rows="10"
              placeHolder="Type your message!"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
