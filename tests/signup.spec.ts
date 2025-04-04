import { expect, test } from '@playwright/test';

//import { createRandomJobgetemail } from '../helpers/test-data';

test.beforeEach(async ({ request }) => {

    const sign_upresponse = await request.post("https://platform-dev.jobget.com/user-service/v4/users/signup", {
        data: {
            deviceType: "web", userType: "employer", companyName: "test", email: "rajatjobget483333244223@yopmail.com", password: "12345678", referralCode: "", source: "", deviceToken: "", firstName: "Rajat", lastName: "Rajat"
        }        
    })
    expect(sign_upresponse.ok(), "Should have created an account via API").toBeTruthy()
    console.log(await sign_upresponse.json())
    const employerId = (await sign_upresponse.json()).body.id 
    const authToken = (await sign_upresponse.json()).body.authToken
    console.log(employerId)

    const addProfileResponse = await request.post(`https://platform-dev.jobget.com/user-service/v4/profile/employer/${employerId}/add`, {
        data:
        {
            companyAddress: "Noida, Uttar Pradesh, India", companyName: "", city: "Noida", employerWebsite: "testing.com", zipCode: "", country: "India", county: "Meerut Division", employeeCount: "11-50", state: "UP", discoveryChannel: "Direct mail", recruitBudgetController: "Someone Else", hiringRequirement: "2-10", currentTitle: "Business or Franchise Owner", mobile: 7906923005, mobileFormat: "1 790-692-3005", "lat": 28.5355161, "lng": 77.3910265, "countryCode": "1"
        },
        headers: {
            Authorization: `Bearer ${authToken}`
        }

    })
    expect(addProfileResponse.ok(), "Should have added the profile").toBeTruthy()
});


test('Signup', async ({ page }) => {
    await page.goto("https://www.preprod.jobget.com/hire");
});
