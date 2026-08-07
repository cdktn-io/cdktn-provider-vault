/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGcpOauth2AccessTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}
  */
  readonly impersonatedAccount?: string;
  /**
  * Maximum number of retries when the GCP service account or key is not yet ready. Each retry waits 1 second. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Mount path for the GCP Secret Backend to read credentials from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}
  */
  readonly namespace?: string;
  /**
  * GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}
  */
  readonly roleset?: string;
  /**
  * GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}
  */
  readonly staticAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token}
*/
export class EphemeralVaultGcpOauth2AccessToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_oauth2_access_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGcpOauth2AccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGcpOauth2AccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_oauth2_access_token',
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
    this._impersonatedAccount = config.impersonatedAccount;
    this._maxRetries = config.maxRetries;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._roleset = config.roleset;
    this._staticAccount = config.staticAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // impersonated_account - computed: false, optional: true, required: false
  private _impersonatedAccount?: string; 
  public get impersonatedAccount() {
    return this.getStringAttribute('impersonated_account');
  }
  public set impersonatedAccount(value: string) {
    this._impersonatedAccount = value;
  }
  public resetImpersonatedAccount() {
    this._impersonatedAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedAccountInput() {
    return this._impersonatedAccount;
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

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // roleset - computed: false, optional: true, required: false
  private _roleset?: string; 
  public get roleset() {
    return this.getStringAttribute('roleset');
  }
  public set roleset(value: string) {
    this._roleset = value;
  }
  public resetRoleset() {
    this._roleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesetInput() {
    return this._roleset;
  }

  // static_account - computed: false, optional: true, required: false
  private _staticAccount?: string; 
  public get staticAccount() {
    return this.getStringAttribute('static_account');
  }
  public set staticAccount(value: string) {
    this._staticAccount = value;
  }
  public resetStaticAccount() {
    this._staticAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAccountInput() {
    return this._staticAccount;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_ttl - computed: true, optional: false, required: false
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      impersonated_account: cdktn.stringToTerraform(this._impersonatedAccount),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      roleset: cdktn.stringToTerraform(this._roleset),
      static_account: cdktn.stringToTerraform(this._staticAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      impersonated_account: {
        value: cdktn.stringToHclTerraform(this._impersonatedAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      roleset: {
        value: cdktn.stringToHclTerraform(this._roleset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_account: {
        value: cdktn.stringToHclTerraform(this._staticAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
