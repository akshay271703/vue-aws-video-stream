### FILE UPLOAD WORKFLOW

## STEP 1: IAM Settings

- Create new Role
- Choose use case to be `LAMBDA`. Click next
- For Permission Policies attach the following two policies
  - S3FullAccess
  - CloudWatchLogsFullAccess

## STEP 2: LAMBDA settings

- New Lambda Function.
- Select default execution role to the one just created above.
- Update configuration with the following instructions
  - Select Configurations
  - Select General Configurations
  - Click Edit
  - Select Memory as 500Mb
  - Select Timeout to be 1min 0s // Depends on the bandwidth

## STEP 3: Create New S3 Bucket

Configurations for S3 bucket

- Enable bucket versioning
- Enable Server Side Encryption

## STEP 4: Integrate AWS API Gateway

Steps

- SELECT REST API
- Select New API
- Setup name and set endpoint as Regional

Create `New Resource` and enable `CORS`
Inside `New Resource` add a new `POST` Method

- Checkmark `Use Lambda Proxy integration`
- Select Lambda Function created in previous steps.
- Deploy API
