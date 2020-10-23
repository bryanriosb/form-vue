Vue.component("autho-acknow", {

    data() {
      return {
        
        fields: [

          { label: 'I authorize and accept terms and conditions', type:'checkbox', md: 12 , sm: 12, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Patient’s or Authorized Representative’s Printed Name', type:'text', md: 9 , sm: 6, value: null, rule: [v => !!v || 'Field is required'] },
          { label: 'Date', md: 3 , sm: 6, type: 'date', value: moment().format("YYYY-MM-DD"), rule: [v => !!v || 'Field is required']  },
        ],
      
      };
    },
    mounted() {
      this.$emit('authorizationAcknow', this.fields);
    },
    methods: {

      
    },
    template: /*html*/ `
      <v-container>

        <v-row no-gutters>

          <v-col v-for="(field, index) in fields" :key="index" cols="12" :md="field.md" :sm="field.sm">
          


            <div class="autho-container" v-if="index === 0">

              <v-card-text> 

                <p>

                  <b>TREATMENT AUTHORIZATION:</b> I authorize Physical Therapy treatment of myself or my minor child by the therapists and staff
                  at Body Hack Physical Therapy, PLLC.
                  <b>INFORMED CONSENT:</b> The term “informed consent” means that the potential risks, benefits, and alternatives of physical
                  therapy treatment have been explained to me.
                  The therapist provides a wide range of services and I understand that I will receive information at the initial visit
                  concerning the treatment and options available for my condition.
  
                </p>
                <p>

                  Physical therapy involves the use of many different types of physical evaluation and treatment. At  <b>Body Hack Physical
                  Therapy, PLLC,</b> we use a variety of procedures and modalities to help us to try to improve your level of function. As
                  with all forms of medical treatment, there are benefits and risks involved with physical therapy. Since the physical
                  response to a specific treatment can vary widely from person to person, it is not always possible to accurately predict
                  your response to a certain therapy modality or procedure. We are not able to guarantee precisely what your reaction to a
                  particular treatment might be, nor can we guarantee that our treatment will help the condition you are seeking treatment
                  for. There is also a risk that your treatment may cause pain or injury, or may aggravate previously existing conditions.
                  You have the right to ask your physical therapist what type of treatment he or she is planning based on your history,
                  diagnosis, symptoms and testing results. You may also discuss with your therapist what the potential risks and benefits
                  of a specific treatment might be. You have the right to decline any portion of your treatment at any time before or
                  during your treatment session. Therapeutic exercises are an integral part of most physical therapy treatment plans.
                  Exercise has inherent physical risks associated with it. If you have any questions regarding the type of exercise you
                  are performing and any specific risks associated with your exercises, your therapist will be glad to answer them. If I
                  do not wish to participate in the therapy and/or exercise program, I will discuss my medical, surgical or
                  pharmacological alternatives with my physician or primary care provider.

                </p>
                
                <p>
                  <b>REFERRAL AUTHORIZATION:</b> Your insurance carrier may require a referral from your primary care physician for our services.
                  Please be aware that it is your responsibility to obtain all necessary referrals prior to therapy. If your insurance
                  carrier required an authorization for service, no service will be rendered until the authorization is obtained.
                  Furthermore, we may be required to contact your doctor for a treatment order referral for services.
                </p>

                <p>
                  <b>CANCELLATION AND/OR NO-SHOW POLICY:</b> Body Hack Physical Therapy, PLLC urges you to keep every appointment, as consistent
                  treatment will expedite your recovery. In the event you need to cancel an appointment, we require at least 24 hours
                  notice, excluding Saturday and Sunday. Patients who cancel without proper notice or fail to show for a scheduled
                  appointment will be subject to a <b>$40.00_______</b> charge for each occurrence. Arrival more than <b>15 minutes</b> after the time
                  of your scheduled appointment may be considered a failed appointment.
                </p>

                <p>
                  <b>ASSIGNMENT OF BENEFITS:</b> I authorize payment of my Medicare and/or Insurance benefits to be made directly to <b>Body Hack
                    Physical Therapy, PLLC</b> on my behalf for physical therapy services rendered. In the event my insurance carrier does not
                  accept Assignment of Benefits, or if payments are made directly to me, I will endorse such payments to <b>Body Hack
                    Physical Therapy, PLLC</b> within <b>five (5) days</b> of receipt of such payment.
                </p>

                <p>
                  <b>FINANCIAL/INSURANCE RESPONSIBILITY FOR ALL BODY HACK PHYSICAL THERAPY, PLLC SERVICES:</b> I understand and agree to the
                  following policies regarding financial and insurance responsibilities. Payment is required at or before each visit. I
                  am responsible for charges incurred for all treatment rendered. This responsibility includes co-pay, co-insurance,
                  deductible amounts, non-covered and excluded items not paid for by my insurance carrier or other party responsible for
                  coverage of my medical expenses. I agree that I am responsible for any payments for services my insurance carrier
                  determines, either now or at a later date, to be unreasonable or not medically necessary. I further understand, <b>Body
                  Hack Physical Therapy LLC</b> will not be obligated to take action on my behalf against an insurance carrier for
                  collecting or negotiating my insurance claim. I also agree to be responsible for costs and expenses, including court
                  costs, attorney fees and interest, should it be necessary for <b>Body Hack Physical Therapy LLC</b> to take action to secure
                  payment of an outstanding balance owed.
                </p>

                <p>

                  <b>FURTHER NOTICES AS TO POLICIES REGARDING MEDICARE: Body Hack Physical Therapy LLC</b> is a participating provider of
                  Medicare; as such we will handle all billing to Medicare and any secondary insurance. Medicare requires you to satisfy a
                  yearly deductible before they will begin paying benefits. Medicare will deduct the deductible amount from the first
                  claim they receive each calendar year. Unless you have satisfied your annual deductible with another Medicare provider’s
                  office you are responsible to pay your deductible to <b>Body Hack Physical Therapy LLC.</b> After your deductible is satisfied
                  Medicare will reimburse us 80% of their standard fee for Physical Therapy services. Therefore your payment
                  responsibility is 20% of the standard Medicare fee for Physical Therapy. Medicare has a financial allowance <b>($2,080 for
                    2020)</b> for Out Patient Physical Therapy Services, which will cover you for <b>approximately 15 treatments per year</b> there are
                  two exceptions to this financial limit 1) you may choose to obtain your outpatient services at a hospital once you reach
                  the $1,880 or 2) in certain circumstances, Medicare may grant a waiver of this limit based on specific criteria which we
                  will detail after your initial evaluation. Therefore, unless you qualify for the Medicare or have additional insurance
                  coverage you will be responsible for payment of any treatments in excess of the Medicare allowance. In addition, I
                  understand that, in certain circumstances, Medicare may find that physical therapy services are not “reasonable and/or
                  medically necessary” for the illness, injury or condition for which I am seeking treatment. I understand that Medicare
                  bases this ruling on the diagnosis provided by my physician and their standards for that diagnosis. I understand, in
                  this case, I will be responsible for any and all charged incurred.

                </p>
                  
                <p>
                  <b>NO GUARANTEES:</b> I recognize that the practice of physical therapy is as much an art as a science, and therefore
                  acknowledge that no guaranties have been or can be made regarding the likelihood of success or outcome of any therapy
                  rendered at <b>Body Hack Physical Therapy, PLLC</b>
                </p>

                <p>
                  <b>REVOCATION OF AUTHORIZATIONS:</b> These authorizations may be revoked by me, in writing, at any time. Such revocation will
                  not affect my financial responsibility to pay for services rendered.
                </p>

                <p>
                  <b>PATIENT ACKNOWLEDGMENT:</b> I certify that the information I provide to my doctors, therapists and insurance company is
                  correct. I certify that I am here to receive medical care and for no other purpose. I do not represent any third party.
                </p>

                <p>
                  By signing and dating this form I acknowledge I have discussed, or have had the opportunity to discuss, with my
                  therapist the nature and purpose of Physical Therapy treatment in general and my treatment in particular (including my
                  Individualized Plan of Care) as well as the contents of these Acknowledgements and Authorizations.
                </p>

                <p>
                  I consent to the Physical Therapy treatments offered or recommended to me by my Doctor and/or Physical Therapist. I
                  intend this consent to apply to all my present and future Physical Therapy care.
                </p>

                <center>
                  <h2 style="font-weight: 500;">ACKNOWLEDGEMENT OF RECEIPT OF NOTICE OF PRIVACY PRACTICES (HIPAA)</h2>
                </center>
                <br>
                <p>

                  My signature below indicates that I have been given the Notice of Privacy Practices for <b>Body Hack Physical Therapy, LLC.</b>
                  I understand that as part of my healthcare, <b>Body Hack Physical Therapy, LLC.</b> originates and maintains health records
                  describing my health history, symptoms, examination and test results, diagnoses, treatment, and any plans for future
                  care or treatment. I understand that this information serves as:

                </p>

                <ul>
                  <li>a basis for planning my care and treatment</li>
                  <li>a means of communication among the many health professionals who contribute to my care</li>
                  <li>a source of information for applying my diagnosis and surgical information to my bill</li>
                  <li>a means by which a third-party payer can verify that services billed were actually provided</li>
                  <li>and a tool for routine healthcare operations such as assessing quality and reviewing the competence of healthcare professionals</li>
                </ul>

                <br>

                <p>
                  I understand that I can review the notice prior to signing this acknowledgement. I understand that Body Hack Physical
                  Therapy, LLC. reserves the right to change their notice and practices and will provide me a copy of any revised notice.
                </p>

                <p>
                  THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN ACCESS THIS
                  INFORMATION. PLEASE REVIEW IT CAREFULLY.
                  IF YOU HAVE QUESTIONS ABOUT THIS NOTICE, PLEASE FEEL FREE TO SPEAK TO YOUR THERAPIST, HIS/HER DESIGNEE OR THE HIPAA
                  PRIVACY OFFICER.
                </p>

                <p>
                  Body Hack Physical Therapy, PLLC is committed to maintaining and protecting the confidentiality of your personal
                  information. This Notice of Privacy Practices is being provided to you as a requirement of the Health Insurance
                  Portability and Accountability Act of 1996 (HIPAA). It will inform you about the ways in which we may use and disclose
                  your health information, and the safeguards we have put into place to protect it. It also describes your rights and
                  certain obligations we have regarding the use and disclosure of your health information.
                </p>

                <h2>
                  OUR DUTIES TO YOU REGARDING YOUR PROTECTED HEALTH INFORMATION
                </h2><br>

                <p>
                  “Protected Health Information” is individually identifiable health information expressed in the form of oral, written or
                  electronic communications. This information includes demographic information such as your age, address, email address,
                  and other information that relates to your past, present or future health condition and related healthcare services.
                  Body Hack Physical Therapy, PLLC is required by law to:
                </p>

                <ul>
                  <li>Make sure your health information is kept private. </li>
                  <li>Give you this notice of our legal duties and privacy practices related to the use and disclosure of your protected health information. </li>
                  <li>Follow the terms of the notice currently in effect. </li>
                  <li>Communicate any changes in this notice to you.</li>
                </ul>

                <br>

                <h2>
                  <b>GOVERNMENTAL PRIVACY LAWS AND REGULATIONS</b>
                </h2><br>

                <p>
                  There are several other federal, state and city privacy laws that provide stronger restrictions about the use and
                  disclosure of health information. The stricter laws have been taken into consideration in developing our policies and
                  this notice of how we will use and disclose your protected health information.
                </p>

                <h2>
                  <b>HOW WE USE AND DISCLOSE YOUR HEALTH INFORMATION</b> 
                </h2><br>

                <p>
                  The following categories describe different ways that we use and disclose your health information. We will not use your
                  confidential information or disclose it to others without your authorization, except for the following purposes:
                </p>

                <p>
                  Treatmen: We may use and/or disclose your confidential health information to provide you with treatment and/or services.
                  This includes your therapist’s recommendation(s), and those of other professionals/paraprofessionals including clerical,
                  coordination and management staff.
                </p>

                <p>
                  Payment: Your protected health information will be used, as needed, to bill and collect payment for treatment and
                  services provided to you. We may share information about a treatment and/or service you may receive to your health
                  insurer to receive approval for payment.
                </p>

                <p>
                  Health Care Operations: We may use and disclose health information about you for regular health care operations. The
                  medical staff in this practice will use your health information to assess the care you received and the outcome of your
                  case compared to others like it. Your information may be reviewed for risk management or quality assessment/improvement
                  purposes in our efforts to continually improve the quality and effectiveness of the care and services we provide.
                </p>

                <p>
                  We will share your protected health information with third-party “business associates” who perform various activities
                  for the practice. The business associates will also be required to protect your health information.
                </p>

                <p>
                  We may remove information that identifies you from this set of health information so others may use it to study health
                  care and health care delivery without learning your identity.
                </p>

                <p>
                  Appointment Reminders: We may use and disclose health information to contact you as a reminder that you have an
                  appointment for treatment or care in our Practice. These reminders will not identify the purpose of your visit.
                </p>

                <p>
                  Required by Law: We will disclose health information about you when required to do so by federal, state or local laws.
                </p>

                <p>
                  Public Health Activities: We may disclose your confidential health information for the following public health activities and purposes: 
                </p>

                <ul>
                  <li>To report health information to public health authorities that are authorized by law to receive such information for the purpose of preventing or controlling disease, injury or disability; </li>
                  <li>To report child abuse or neglect to a government authority that is authorized by law to receive such reports; </li>
                  <li>To report information about a product or activity that is regulated by the US Food and Drug Administration (FDA) to a person responsible for the quality, safety or effectiveness of the product or activity;  </li>
                  <li>To conduct post-marketing surveillance, as required; and </li>
                  <li>To alert a person who may have been exposed to a communicable disease, if we are authorized by law to give this notice. </li>
                </ul>

                <br>

                <p>
                  Legal Proceedings: We may release protected health information about you in response to a court or administrative order
                  if you are involved in a lawsuit or dispute. We may also disclose health information about you in response to a
                  subpoena, discovery request or other lawful process by someone else involved in the dispute, but only if efforts have
                  been made to tell you about the request.
                </p>

                <p>
                  Law Enforcement: We may release health information if asked to do so by law enforcement officials: 
                </p>

                <ul>
                  <li>In response to a court order, subpoena, warrant, summons or similar process. </li>
                  <li>To identify or locate a suspect, fugitive, material witness or missing person. </li>
                  <li>About the victim of a crime if, under certain circumstances, we are unable to obtain the person’s agreement. </li>
                  <li>About the death we believe may be the result of criminal conduct. </li>
                  <li>About criminal conduct at the Practice.  </li>
                  <li>In emergency circumstances to report a crime, the location of the crime or victims, or the identity, description or location of the person who committed the crime. </li>
                </ul>

                <br>

                <p>
                  Research: Under certain circumstances, we may use and disclose your confidential information for research purposes
                  without an authorization. An authorization would not be necessary if your identifying information was removed.
                </p>

                <p>
                  Workers’ Compensation: We may release your health information to comply with Workers’ Compensation Laws and other
                  similar legally established programs. The programs provide benefits for work-related illness or injury.
                </p>

                <p>
                  Promotional Gifts: We may use your confidential health information so that we may provide you with nominal gifts. We
                  will not disclose your confidential information to other companies for their marketing purposes.
                </p>

                <p>
                  Health Related Benefits and Services: We may use and disclose health information to inform you about health-related
                  benefits or services that may be of interest to you. You may be contacted by the Practice regarding general
                  health-related products and services and/or healthrelated products and services targeted to your specific health status
                  or condition, but only where we believe those products or services may benefit you. If the communication is targeted to
                  you, it must explain why you were targeted and how the product or service relates to your health. Any communication you
                  receive must identify the Practice as the source of the communication, inform you if we received any payment for making
                  the communication, and contain instructions about how you may request that we not contact you further about such
                  healthrelated products and services.
                </p>

                <p>
                  Criminal Activity: Under certain Federal and state laws, we may disclose your protected health information if we believe
                  that its use or disclosure is necessary to prevent or lessen a serious and imminent threat to the health or safety of a
                  person or the public. We may also disclose your health information if it is necessary for law enforcement authorities to
                  identify or apprehend an individual.
                </p>


                <p>
                  Government Functions: We may disclose your health information to the U.S. Military or to authorized federal or state officials for purposes specified by federal law. 
                </p>


                <p>
                  Coroners, Funeral Directors, and Organ Donation. We may disclose your health information to a coroner or medical
                  examiner. This may be necessary to identify a deceased person or to determine the cause of death. We may also disclose
                  protected health information to funeral directors as authorized by law to assist them in carrying out their duties.
                  Protected health information may also be used and disclosed for organ eye and tissue donations if you have previously
                  agreed to organ donation.
                </p>


                <p>
                  Parental Access: Various New York State laws determine what protected health information can be disclosed to parents,
                  guardians, and persons acting in a similar legal status. We will act consistently with the law and will make disclosures
                  only when necessary.
                </p>


                <p>
                  Individuals Involved in Your Care: Unless you object, we may use or disclose your health information to notify or assist
                  in the notification of a family member or personal representative of your location, your general condition, or death. If
                  you are present, you will have the opportunity to object to this type of use or disclosure. If you are unable to decide
                  or if it is an emergency, we may disclose information that is directly relevant to the person’s involvement in your
                  healthcare, if we determine that it is in your best interest to do so.
                </p>

                <h2><b>YOUR RIGHTS REGARDING YOUR HEALTH INFORMATION </b> </h2><br>

                <p>
                  Although your health record is the physical property of S.P.E.A.R. Physical Therapy, PLLC, the information belongs to
                  you. You have the following rights regarding your protected health information. You may make any of the following
                  requests by completing a “HIPAA Patient Rights Request Form” or by submitting a written request to our office.
                </p>

                <p>
                  Right to Inspect and Copy: You have the right to both inspect and obtain a copy of your protected health information
                  that is contained in a “designated record set” for as long as we maintain your health information. This information is
                  used to make health-related decisions about your care and typically includes professional treatment/progress notes,
                  supplement programs, laboratory reports, prescriptions, and billing/financial records. This request does not include
                  inspection and copying of the following records: psychotherapy notes; information compiled in reasonable anticipation
                  of, or use in, a civil, criminal, or administrative action or proceeding; and protected health information that is
                  subject to laws that prohibit access. If you request copies, we may charge you copying and mailing costs. We may deny
                  your request to inspect and copy in certain very limited circumstances. If you are denied access to health information,
                  you may request that the denial be reviewed.
                </p>

                <p>
                  Right to Request Restrictions: You have the right to request a restriction or limitation on the health information we
                  use or disclose about you for treatment, payment or health care operations. You also have the right to request a limit
                  on the health information we disclose about you to someone who is involved in your care or the payment for your care.
                  While we consider all requests for restrictions carefully, we are not required to agree to your request.
                </p>

                <p>
                  Right To Request Amendment: If you believe the health information we have about you is incorrect or incomplete, you may
                  ask us to amend the information. You have a right to request an amendment for as long as the information is kept by or
                  for Body Physical Therapy, PLLC, if we determine the record is inaccurate.
                </p>

                <p>
                  We may deny your request if it is not in the appropriate form or does not include a reason to support the request. In
                  addition we may deny your request if you ask us to amend information that:
                </p>

                <ul>
                  <li>Was not created by us, unless the person or entity that created the information is no longer available to make the amendment </li>
                  <li>Is not part of the information kept by or for S.P.E.A.R. Physical Therapy, PLLC </li>
                  <li> Is not part of the information which you would be permitted to inspect or copy </li>
                  <li>Is accurate and complete Right to Request Confidential Communications. You may request that we communicate with you
                    using alternative means or at an alternative location. You may also ask that we mail information to you in a sealed
                    envelope rather than a postcard. While we will consider this request carefully, we are not required to agree to all
                    requests. 
                  </li>
                </ul>

                <br>

                <p>
                  Right to Request an Accounting of Disclosures: You have the right to an accounting of disclosures. This is a list of
                  where we have sent your protected health information that does not include disclosures made for treatment, payment, or
                  healthcare operations as described in this notice. Your request must state a time period beginning on or after April 14,
                  2003, and no more than 6 years from the date of request.
                </p>

                <p>
                  Right To Obtain a Copy of this Notice: You have the right to a paper copy of this notice. You may request a copy of this
                  notice at any time. To obtain a copy of this, please contact the Practice Administrator or his/her designee.
                </p>

                <h2><b>CHANGES TO THIS NOTICE </b></h2><br>

                <p>
                  We reserve the right to change our privacy practices and this notice. We reserve the right to make changed notice
                  effective for health information we already have about you as well as any information we receive in the future. If we
                  change the notice, we will provide each active patient with a new notice. You may also obtain a new notice by calling
                  our office.
                </p>

                <h2><b>COMPLAINTS</b></h2><br>

                <p>
                  If you believe your privacy rights have been violated, you may file a complaint with Body Hack Physical Therapy, PLLC’s
                  Privacy Officer or his/her designee at the address below. No retaliation will occur against you for filing a complaint.
                  All complaints must be submitted in writing. You may also file written complaints with the Secretary of the US
                  Department of Health and Human Services. Please call our office to obtain the correct address for the Secretary.
                </p>
                
                <center>
                  <p>Body Hack Physical Therapy, PLLC</p>
                  <p>HIPAA Privacy Officer</p>
                  <p>10-42 Jackson Ave.</p>
                  <p>LIC, NY, 11101</p>  
                </center>
                <br>
                <p>
                  OTHER USES OF YOUR HEALTH INFORMATION Other uses and disclosures of your health information not covered by this notice
                  or the laws that apply to us will be made only with your written permission. If you provide us permission to use or
                  disclose your health information, you may revoke that permission, in writing, at any time. If you revoke your
                  permission, we will no longer use or disclose your health information for the reasons covered by your written
                  authorization. We are unable to take back any disclosures we have already made with your permission and we are required
                  to maintain in our records of the care that we provided to you.
                </p>

                <p>
                  This notice was published on September 21, 2020 and all provisions become effective by Federal Law on April 14, 2003.
                  Our Notice of Privacy Practices remain in effect until modified by Body Hack Physical Therapy, PLLC.
                </p>

              </v-card-text> 

            </div>

        
            <!-- Text -->
            <v-card-text class="field" v-if="field.type === 'text' ">

              <v-text-field
                  outlined
                  :label="field.label"
                  :rules="field.rule"
                  required
                  v-model="field.value"
              ></v-text-field>
              
            </v-card-text>


            <!-- Checkbox -->
            <v-card-text class="check-field"  v-if="field.type === 'checkbox'">
                <v-checkbox class="check-container"
                  v-model="field.value"
                  :rules="field.rule"
                  :label="field.label"
                ></v-checkbox>
            </v-card-text> 

            <!-- Date -->
            <v-card-text class="field" v-if="field.type === 'date'"> 

              <v-menu 
              
              v-model="field.menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
              >

              <template v-slot:activator="{ on, attrs }">

                  <v-text-field no-gutters
                  :disabled="field.label === 'Date'"
                  outlined
                  prepend-inner-icon="mdi-calendar"
                  v-model="field.value"
                  :label="field.label"
                  :rules="field.rule"
                  required
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  ></v-text-field>

              </template>

              <v-date-picker
                  v-model="field.value"
                  @input="field.menu = false"
              ></v-date-picker>

              </v-menu>

          </v-card-text>  

          </v-col>

        </v-row>

      </v-container>

    `,

});
   
   
