/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultUserpassAuthLoginConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Mount path for the Userpass auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#mount EphemeralVaultUserpassAuthLogin#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#mount_id EphemeralVaultUserpassAuthLogin#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#namespace EphemeralVaultUserpassAuthLogin#namespace}
  */
  readonly namespace?: string;
  /**
  * Password to log in with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#password EphemeralVaultUserpassAuthLogin#password}
  */
  readonly password: string;
  /**
  * Username to log in with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#username EphemeralVaultUserpassAuthLogin#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login vault_userpass_auth_login}
*/
export class EphemeralVaultUserpassAuthLogin extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_userpass_auth_login";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login vault_userpass_auth_login} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultUserpassAuthLoginConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultUserpassAuthLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_userpass_auth_login',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // renewable - computed: true, optional: false, required: false
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      password: cdktn.stringToTerraform(this._password),
      username: cdktn.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
