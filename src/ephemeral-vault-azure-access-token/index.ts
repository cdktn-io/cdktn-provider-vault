/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultAzureAccessTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Mount path for the Azure secret engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}
  */
  readonly namespace?: string;
  /**
  * Number of seconds to wait between propagation retries. Defaults to 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * Static role name to fetch an access token for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}
  */
  readonly role: string;
  /**
  * The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}
  */
  readonly scope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token}
*/
export class EphemeralVaultAzureAccessToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_access_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultAzureAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultAzureAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_access_token',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._maxRetries = config.maxRetries;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._retryDelay = config.retryDelay;
    this._role = config.role;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // expires_in - computed: true, optional: false, required: false
  public get expiresIn() {
    return this.getNumberAttribute('expires_in');
  }

  // ext_expires_in - computed: true, optional: false, required: false
  public get extExpiresIn() {
    return this.getNumberAttribute('ext_expires_in');
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

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_type - computed: true, optional: false, required: false
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      retry_delay: cdktn.numberToTerraform(this._retryDelay),
      role: cdktn.stringToTerraform(this._role),
      scope: cdktn.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      retry_delay: {
        value: cdktn.numberToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
