/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OsSecretBackendAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Custom metadata for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * Disable automated password rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * Name of the host this account belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}
  */
  readonly host: string;
  /**
  * Path where the OS secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}
  */
  readonly mount: string;
  /**
  * Name of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}
  */
  readonly namespace?: string;
  /**
  * Reference to a parent account for rotation management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}
  */
  readonly parentAccountRef?: string;
  /**
  * Name of the password policy to use for password generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * Password for the account. This is write-only, will not be read back from Vault,
  * 	and can only be set during resource creation. To update the password after creation, use the Vault CLI
  * 	or API to call the reset endpoint directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}
  */
  readonly passwordWo: string;
  /**
  * How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * Cron schedule for password rotation. Mutually exclusive with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * Window of time for password rotation, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Username for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}
  */
  readonly username: string;
  /**
  * Verify the connection to the host with the provided credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account vault_os_secret_backend_account}
*/
export class OsSecretBackendAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_os_secret_backend_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsSecretBackendAccount to import
  * @param importFromId The id of the existing OsSecretBackendAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsSecretBackendAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_os_secret_backend_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account vault_os_secret_backend_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsSecretBackendAccountConfig
  */
  public constructor(scope: Construct, id: string, config: OsSecretBackendAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_os_secret_backend_account',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
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
    this._customMetadata = config.customMetadata;
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._host = config.host;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._parentAccountRef = config.parentAccountRef;
    this._passwordPolicy = config.passwordPolicy;
    this._passwordWo = config.passwordWo;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._username = config.username;
    this._verifyConnection = config.verifyConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // disable_automated_rotation - computed: true, optional: true, required: false
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // last_vault_rotation - computed: true, optional: false, required: false
  public get lastVaultRotation() {
    return this.getStringAttribute('last_vault_rotation');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // next_vault_rotation - computed: true, optional: false, required: false
  public get nextVaultRotation() {
    return this.getStringAttribute('next_vault_rotation');
  }

  // parent_account_ref - computed: false, optional: true, required: false
  private _parentAccountRef?: string; 
  public get parentAccountRef() {
    return this.getStringAttribute('parent_account_ref');
  }
  public set parentAccountRef(value: string) {
    this._parentAccountRef = value;
  }
  public resetParentAccountRef() {
    this._parentAccountRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAccountRefInput() {
    return this._parentAccountRef;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // password_wo - computed: false, optional: false, required: true
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // rotation_period - computed: true, optional: true, required: false
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

  // rotation_schedule - computed: true, optional: true, required: false
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

  // rotation_window - computed: true, optional: true, required: false
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

  // verify_connection - computed: true, optional: true, required: false
  private _verifyConnection?: boolean | cdktn.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktn.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._customMetadata),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      host: cdktn.stringToTerraform(this._host),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      parent_account_ref: cdktn.stringToTerraform(this._parentAccountRef),
      password_policy: cdktn.stringToTerraform(this._passwordPolicy),
      password_wo: cdktn.stringToTerraform(this._passwordWo),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      username: cdktn.stringToTerraform(this._username),
      verify_connection: cdktn.booleanToTerraform(this._verifyConnection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._customMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disable_automated_rotation: {
        value: cdktn.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktn.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      parent_account_ref: {
        value: cdktn.stringToHclTerraform(this._parentAccountRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy: {
        value: cdktn.stringToHclTerraform(this._passwordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktn.stringToHclTerraform(this._passwordWo),
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
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_connection: {
        value: cdktn.booleanToHclTerraform(this._verifyConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
