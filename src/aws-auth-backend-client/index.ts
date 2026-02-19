/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsAuthBackendClientConfig extends cdktn.TerraformMetaArguments {
  /**
  * AWS Access key with permissions to query AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}
  */
  readonly accessKey?: string;
  /**
  * List of additional headers that are allowed to be in STS request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#allowed_sts_header_values AwsAuthBackendClient#allowed_sts_header_values}
  */
  readonly allowedStsHeaderValues?: string[];
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}
  */
  readonly backend?: string;
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#disable_automated_rotation AwsAuthBackendClient#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * URL to override the default generated endpoint for making AWS EC2 API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}
  */
  readonly ec2Endpoint?: string;
  /**
  * URL to override the default generated endpoint for making AWS IAM API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}
  */
  readonly iamEndpoint?: string;
  /**
  * The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}
  */
  readonly iamServerIdHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The audience claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}
  */
  readonly identityTokenAudience?: string;
  /**
  * The TTL of generated identity tokens in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}
  */
  readonly identityTokenTtl?: number;
  /**
  * Number of max retries the client should use for recoverable errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}
  */
  readonly namespace?: string;
  /**
  * Role ARN to assume for plugin identity token federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#rotation_period AwsAuthBackendClient#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#rotation_schedule AwsAuthBackendClient#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#rotation_window AwsAuthBackendClient#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * AWS Secret key with permissions to query AWS APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Write-only AWS Secret key with permissions to query AWS APIs. This field is recommended over secret_key for enhanced security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#secret_key_wo AwsAuthBackendClient#secret_key_wo}
  */
  readonly secretKeyWo?: string;
  /**
  * Version counter for write-only secret_key field. Increment this value to force update of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#secret_key_wo_version AwsAuthBackendClient#secret_key_wo_version}
  */
  readonly secretKeyWoVersion?: number;
  /**
  * URL to override the default generated endpoint for making AWS STS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}
  */
  readonly stsEndpoint?: string;
  /**
  * Region to override the default region for making AWS STS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * If set, will override sts_region and use the region from the client request's header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}
  */
  readonly useStsRegionFromClient?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}
*/
export class AwsAuthBackendClient extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsAuthBackendClient resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAuthBackendClient to import
  * @param importFromId The id of the existing AwsAuthBackendClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAuthBackendClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_auth_backend_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendClientConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendClientConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_client',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._allowedStsHeaderValues = config.allowedStsHeaderValues;
    this._backend = config.backend;
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._ec2Endpoint = config.ec2Endpoint;
    this._iamEndpoint = config.iamEndpoint;
    this._iamServerIdHeaderValue = config.iamServerIdHeaderValue;
    this._id = config.id;
    this._identityTokenAudience = config.identityTokenAudience;
    this._identityTokenTtl = config.identityTokenTtl;
    this._maxRetries = config.maxRetries;
    this._namespace = config.namespace;
    this._roleArn = config.roleArn;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._secretKey = config.secretKey;
    this._secretKeyWo = config.secretKeyWo;
    this._secretKeyWoVersion = config.secretKeyWoVersion;
    this._stsEndpoint = config.stsEndpoint;
    this._stsRegion = config.stsRegion;
    this._useStsRegionFromClient = config.useStsRegionFromClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allowed_sts_header_values - computed: false, optional: true, required: false
  private _allowedStsHeaderValues?: string[]; 
  public get allowedStsHeaderValues() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_sts_header_values'));
  }
  public set allowedStsHeaderValues(value: string[]) {
    this._allowedStsHeaderValues = value;
  }
  public resetAllowedStsHeaderValues() {
    this._allowedStsHeaderValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedStsHeaderValuesInput() {
    return this._allowedStsHeaderValues;
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // disable_automated_rotation - computed: false, optional: true, required: false
  private _disableAutomatedRotation?: boolean | cdktn.IResolvable; 
  public get disableAutomatedRotation() {
    return this.getBooleanAttribute('disable_automated_rotation');
  }
  public set disableAutomatedRotation(value: boolean | cdktn.IResolvable) {
    this._disableAutomatedRotation = value;
  }
  public resetDisableAutomatedRotation() {
    this._disableAutomatedRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomatedRotationInput() {
    return this._disableAutomatedRotation;
  }

  // ec2_endpoint - computed: false, optional: true, required: false
  private _ec2Endpoint?: string; 
  public get ec2Endpoint() {
    return this.getStringAttribute('ec2_endpoint');
  }
  public set ec2Endpoint(value: string) {
    this._ec2Endpoint = value;
  }
  public resetEc2Endpoint() {
    this._ec2Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2EndpointInput() {
    return this._ec2Endpoint;
  }

  // iam_endpoint - computed: false, optional: true, required: false
  private _iamEndpoint?: string; 
  public get iamEndpoint() {
    return this.getStringAttribute('iam_endpoint');
  }
  public set iamEndpoint(value: string) {
    this._iamEndpoint = value;
  }
  public resetIamEndpoint() {
    this._iamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamEndpointInput() {
    return this._iamEndpoint;
  }

  // iam_server_id_header_value - computed: false, optional: true, required: false
  private _iamServerIdHeaderValue?: string; 
  public get iamServerIdHeaderValue() {
    return this.getStringAttribute('iam_server_id_header_value');
  }
  public set iamServerIdHeaderValue(value: string) {
    this._iamServerIdHeaderValue = value;
  }
  public resetIamServerIdHeaderValue() {
    this._iamServerIdHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServerIdHeaderValueInput() {
    return this._iamServerIdHeaderValue;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_token_audience - computed: false, optional: true, required: false
  private _identityTokenAudience?: string; 
  public get identityTokenAudience() {
    return this.getStringAttribute('identity_token_audience');
  }
  public set identityTokenAudience(value: string) {
    this._identityTokenAudience = value;
  }
  public resetIdentityTokenAudience() {
    this._identityTokenAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenAudienceInput() {
    return this._identityTokenAudience;
  }

  // identity_token_ttl - computed: true, optional: true, required: false
  private _identityTokenTtl?: number; 
  public get identityTokenTtl() {
    return this.getNumberAttribute('identity_token_ttl');
  }
  public set identityTokenTtl(value: number) {
    this._identityTokenTtl = value;
  }
  public resetIdentityTokenTtl() {
    this._identityTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenTtlInput() {
    return this._identityTokenTtl;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule - computed: false, optional: true, required: false
  private _rotationSchedule?: string; 
  public get rotationSchedule() {
    return this.getStringAttribute('rotation_schedule');
  }
  public set rotationSchedule(value: string) {
    this._rotationSchedule = value;
  }
  public resetRotationSchedule() {
    this._rotationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationScheduleInput() {
    return this._rotationSchedule;
  }

  // rotation_window - computed: false, optional: true, required: false
  private _rotationWindow?: number; 
  public get rotationWindow() {
    return this.getNumberAttribute('rotation_window');
  }
  public set rotationWindow(value: number) {
    this._rotationWindow = value;
  }
  public resetRotationWindow() {
    this._rotationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowInput() {
    return this._rotationWindow;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_key_wo - computed: false, optional: true, required: false
  private _secretKeyWo?: string; 
  public get secretKeyWo() {
    return this.getStringAttribute('secret_key_wo');
  }
  public set secretKeyWo(value: string) {
    this._secretKeyWo = value;
  }
  public resetSecretKeyWo() {
    this._secretKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyWoInput() {
    return this._secretKeyWo;
  }

  // secret_key_wo_version - computed: false, optional: true, required: false
  private _secretKeyWoVersion?: number; 
  public get secretKeyWoVersion() {
    return this.getNumberAttribute('secret_key_wo_version');
  }
  public set secretKeyWoVersion(value: number) {
    this._secretKeyWoVersion = value;
  }
  public resetSecretKeyWoVersion() {
    this._secretKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyWoVersionInput() {
    return this._secretKeyWoVersion;
  }

  // sts_endpoint - computed: false, optional: true, required: false
  private _stsEndpoint?: string; 
  public get stsEndpoint() {
    return this.getStringAttribute('sts_endpoint');
  }
  public set stsEndpoint(value: string) {
    this._stsEndpoint = value;
  }
  public resetStsEndpoint() {
    this._stsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsEndpointInput() {
    return this._stsEndpoint;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this.getStringAttribute('sts_region');
  }
  public set stsRegion(value: string) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // use_sts_region_from_client - computed: true, optional: true, required: false
  private _useStsRegionFromClient?: boolean | cdktn.IResolvable; 
  public get useStsRegionFromClient() {
    return this.getBooleanAttribute('use_sts_region_from_client');
  }
  public set useStsRegionFromClient(value: boolean | cdktn.IResolvable) {
    this._useStsRegionFromClient = value;
  }
  public resetUseStsRegionFromClient() {
    this._useStsRegionFromClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStsRegionFromClientInput() {
    return this._useStsRegionFromClient;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktn.stringToTerraform(this._accessKey),
      allowed_sts_header_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedStsHeaderValues),
      backend: cdktn.stringToTerraform(this._backend),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      ec2_endpoint: cdktn.stringToTerraform(this._ec2Endpoint),
      iam_endpoint: cdktn.stringToTerraform(this._iamEndpoint),
      iam_server_id_header_value: cdktn.stringToTerraform(this._iamServerIdHeaderValue),
      id: cdktn.stringToTerraform(this._id),
      identity_token_audience: cdktn.stringToTerraform(this._identityTokenAudience),
      identity_token_ttl: cdktn.numberToTerraform(this._identityTokenTtl),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      namespace: cdktn.stringToTerraform(this._namespace),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      secret_key: cdktn.stringToTerraform(this._secretKey),
      secret_key_wo: cdktn.stringToTerraform(this._secretKeyWo),
      secret_key_wo_version: cdktn.numberToTerraform(this._secretKeyWoVersion),
      sts_endpoint: cdktn.stringToTerraform(this._stsEndpoint),
      sts_region: cdktn.stringToTerraform(this._stsRegion),
      use_sts_region_from_client: cdktn.booleanToTerraform(this._useStsRegionFromClient),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktn.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_sts_header_values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedStsHeaderValues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_automated_rotation: {
        value: cdktn.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ec2_endpoint: {
        value: cdktn.stringToHclTerraform(this._ec2Endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_endpoint: {
        value: cdktn.stringToHclTerraform(this._iamEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_server_id_header_value: {
        value: cdktn.stringToHclTerraform(this._iamServerIdHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_token_audience: {
        value: cdktn.stringToHclTerraform(this._identityTokenAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_token_ttl: {
        value: cdktn.numberToHclTerraform(this._identityTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktn.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_schedule: {
        value: cdktn.stringToHclTerraform(this._rotationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_window: {
        value: cdktn.numberToHclTerraform(this._rotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_key: {
        value: cdktn.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_wo: {
        value: cdktn.stringToHclTerraform(this._secretKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._secretKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sts_endpoint: {
        value: cdktn.stringToHclTerraform(this._stsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_region: {
        value: cdktn.stringToHclTerraform(this._stsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sts_region_from_client: {
        value: cdktn.booleanToHclTerraform(this._useStsRegionFromClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
