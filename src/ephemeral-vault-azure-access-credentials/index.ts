/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultAzureAccessCredentialsConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Azure Secret Backend to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}
  */
  readonly backend: string;
  /**
  * The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}
  */
  readonly environment?: string;
  /**
  * If 'validate_creds' is true, the number of seconds after which to give up validating credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}
  */
  readonly maxCredValidationSeconds?: number;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}
  */
  readonly namespace?: string;
  /**
  * If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}
  */
  readonly numSecondsBetweenTests?: number;
  /**
  * If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}
  */
  readonly numSequentialSuccesses?: number;
  /**
  * Input metadata to send with the request to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}
  */
  readonly requestMetadata?: { [key: string]: string };
  /**
  * Azure Secret Role to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}
  */
  readonly role: string;
  /**
  * The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Whether generated credentials should be validated before being returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}
  */
  readonly validateCreds?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials}
*/
export class EphemeralVaultAzureAccessCredentials extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_access_credentials";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultAzureAccessCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultAzureAccessCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_access_credentials',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._environment = config.environment;
    this._maxCredValidationSeconds = config.maxCredValidationSeconds;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._numSecondsBetweenTests = config.numSecondsBetweenTests;
    this._numSequentialSuccesses = config.numSequentialSuccesses;
    this._requestMetadata = config.requestMetadata;
    this._role = config.role;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._validateCreds = config.validateCreds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // lease_renewable - computed: true, optional: false, required: false
  public get leaseRenewable() {
    return this.getBooleanAttribute('lease_renewable');
  }

  // lease_start_time - computed: true, optional: false, required: false
  public get leaseStartTime() {
    return this.getStringAttribute('lease_start_time');
  }

  // max_cred_validation_seconds - computed: false, optional: true, required: false
  private _maxCredValidationSeconds?: number; 
  public get maxCredValidationSeconds() {
    return this.getNumberAttribute('max_cred_validation_seconds');
  }
  public set maxCredValidationSeconds(value: number) {
    this._maxCredValidationSeconds = value;
  }
  public resetMaxCredValidationSeconds() {
    this._maxCredValidationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCredValidationSecondsInput() {
    return this._maxCredValidationSeconds;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktn.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mount_id - computed: false, optional: true, required: false
  private _mountId?: string; 
  public get mountId() {
    return this.getStringAttribute('mount_id');
  }
  public set mountId(value: string) {
    this._mountId = value;
  }
  public resetMountId() {
    this._mountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountIdInput() {
    return this._mountId;
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

  // num_seconds_between_tests - computed: false, optional: true, required: false
  private _numSecondsBetweenTests?: number; 
  public get numSecondsBetweenTests() {
    return this.getNumberAttribute('num_seconds_between_tests');
  }
  public set numSecondsBetweenTests(value: number) {
    this._numSecondsBetweenTests = value;
  }
  public resetNumSecondsBetweenTests() {
    this._numSecondsBetweenTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSecondsBetweenTestsInput() {
    return this._numSecondsBetweenTests;
  }

  // num_sequential_successes - computed: false, optional: true, required: false
  private _numSequentialSuccesses?: number; 
  public get numSequentialSuccesses() {
    return this.getNumberAttribute('num_sequential_successes');
  }
  public set numSequentialSuccesses(value: number) {
    this._numSequentialSuccesses = value;
  }
  public resetNumSequentialSuccesses() {
    this._numSequentialSuccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSequentialSuccessesInput() {
    return this._numSequentialSuccesses;
  }

  // request_metadata - computed: false, optional: true, required: false
  private _requestMetadata?: { [key: string]: string }; 
  public get requestMetadata() {
    return this.getStringMapAttribute('request_metadata');
  }
  public set requestMetadata(value: { [key: string]: string }) {
    this._requestMetadata = value;
  }
  public resetRequestMetadata() {
    this._requestMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMetadataInput() {
    return this._requestMetadata;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // validate_creds - computed: false, optional: true, required: false
  private _validateCreds?: boolean | cdktn.IResolvable; 
  public get validateCreds() {
    return this.getBooleanAttribute('validate_creds');
  }
  public set validateCreds(value: boolean | cdktn.IResolvable) {
    this._validateCreds = value;
  }
  public resetValidateCreds() {
    this._validateCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCredsInput() {
    return this._validateCreds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktn.stringToTerraform(this._backend),
      environment: cdktn.stringToTerraform(this._environment),
      max_cred_validation_seconds: cdktn.numberToTerraform(this._maxCredValidationSeconds),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      num_seconds_between_tests: cdktn.numberToTerraform(this._numSecondsBetweenTests),
      num_sequential_successes: cdktn.numberToTerraform(this._numSequentialSuccesses),
      request_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestMetadata),
      role: cdktn.stringToTerraform(this._role),
      subscription_id: cdktn.stringToTerraform(this._subscriptionId),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
      validate_creds: cdktn.booleanToTerraform(this._validateCreds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktn.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cred_validation_seconds: {
        value: cdktn.numberToHclTerraform(this._maxCredValidationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_id: {
        value: cdktn.stringToHclTerraform(this._mountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_seconds_between_tests: {
        value: cdktn.numberToHclTerraform(this._numSecondsBetweenTests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_sequential_successes: {
        value: cdktn.numberToHclTerraform(this._numSequentialSuccesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktn.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_creds: {
        value: cdktn.booleanToHclTerraform(this._validateCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
