import React from 'react';

function Privacy() {
  return (
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto my-8">
        <h1 className="mb-4">Privacy</h1>

        <div className="flex justify-center">
          <div className="w-full md:w-10/12">
            <h2 className="mb-2">Information Collection, Use, and Sharing</h2>
            <p className="mb-4">
              We are the sole owners of the information collected on this site.
              We will not sell or rent this information to anyone.
            </p>
            <p className="mb-4">
              We will use your information to respond to you, regarding the
              reason you contacted us. We will not share your information with
              any third party outside of our organization, other than as
              necessary to fulfill your request.
            </p>
            <p className="mb-4">
              Unless you ask us not to, we may contact you via email in the
              future to tell you about specials, new products or services or
              changes to this privacy policy.
            </p>

            <h2 className="mb-2">Your Access to and Control Over Information</h2>
            <p className="mb-4">
              You may opt out of any future contacts from us at any time. You
              can do the following at any time by contacting us via the
              email address or phone number given on our website:
            </p>
            <ul className="mb-4">
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Have us delete any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ul>

            <h2 className="mb-2">Security</h2>
            <p className="mb-4">
              We take precautions to protect your information. When you submit
              sensitive information via the website, your information is
              protected online and offline.
            </p>

            <h2 className="mb-2">Updates</h2>
            <p className="mb-4">
              Our Privacy Policy may change from time to time and all updates
              will be posted on this page.
            </p>

            <h2 className="mb-2">Contact Information</h2>
            <p className="mb-4">
              If you feel that we are not abiding by this privacy policy, you
              should contact us immediately:
            </p>
            <ul className="mb-4">
              <li>via telephone at 1-866-903-0907</li>
              <li>
                or email at{' '}
                <a href='mailto:info@yourtrainingprovider.com'>
                  info@yourtrainingprovider.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;