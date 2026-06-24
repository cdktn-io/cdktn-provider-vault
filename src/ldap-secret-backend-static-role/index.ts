/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LdapSecretBackendStaticRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#disable_automated_rotation LdapSecretBackendStaticRole#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * Distinguished name (DN) of the existing LDAP entry to manage password rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path where the LDAP secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}
  */
  readonly mount?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Password for the static role. This is required for Vault to manage an existing account and enable rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#password_wo LdapSecretBackendStaticRole#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for write-only password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#password_wo_version LdapSecretBackendStaticRole#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}
  */
  readonly roleName: string;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The rotation policy to use for this credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#rotation_policy LdapSecretBackendStaticRole#rotation_policy}
  */
  readonly rotationPolicy?: string;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#rotation_schedule LdapSecretBackendStaticRole#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#rotation_window LdapSecretBackendStaticRole#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Skip rotation of the password on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}
  */
  readonly skipImportRotation?: boolean | cdktn.IResolvable;
  /**
  * The username of the existing LDAP entry to manage password rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}
*/
export class LdapSecretBackendStaticRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_secret_backend_static_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LdapSecretBackendStaticRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSecretBackendStaticRole to import
  * @param importFromId The id of the existing LdapSecretBackendStaticRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSecretBackendStaticRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_secret_backend_static_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSecretBackendStaticRoleConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSecretBackendStaticRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_secret_backend_static_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
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
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._dn = config.dn;
    this._id = config.id;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._passwordWo = config.passwordWo;
    this._passwordWoVersion = config.passwordWoVersion;
    this._roleName = config.roleName;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationPolicy = config.rotationPolicy;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._skipImportRotation = config.skipImportRotation;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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

  // mount - computed: false, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
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

  // rotation_policy - computed: false, optional: true, required: false
  private _rotationPolicy?: string; 
  public get rotationPolicy() {
    return this.getStringAttribute('rotation_policy');
  }
  public set rotationPolicy(value: string) {
    this._rotationPolicy = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy;
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

  // skip_import_rotation - computed: false, optional: true, required: false
  private _skipImportRotation?: boolean | cdktn.IResolvable; 
  public get skipImportRotation() {
    return this.getBooleanAttribute('skip_import_rotation');
  }
  public set skipImportRotation(value: boolean | cdktn.IResolvable) {
    this._skipImportRotation = value;
  }
  public resetSkipImportRotation() {
    this._skipImportRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipImportRotationInput() {
    return this._skipImportRotation;
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
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      dn: cdktn.stringToTerraform(this._dn),
      id: cdktn.stringToTerraform(this._id),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      password_wo: cdktn.stringToTerraform(this._passwordWo),
      password_wo_version: cdktn.numberToTerraform(this._passwordWoVersion),
      role_name: cdktn.stringToTerraform(this._roleName),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_policy: cdktn.stringToTerraform(this._rotationPolicy),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      skip_import_rotation: cdktn.booleanToTerraform(this._skipImportRotation),
      username: cdktn.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_automated_rotation: {
        value: cdktn.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dn: {
        value: cdktn.stringToHclTerraform(this._dn),
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
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      password_wo: {
        value: cdktn.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo_version: {
        value: cdktn.numberToHclTerraform(this._passwordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_name: {
        value: cdktn.stringToHclTerraform(this._roleName),
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
      rotation_policy: {
        value: cdktn.stringToHclTerraform(this._rotationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      skip_import_rotation: {
        value: cdktn.booleanToHclTerraform(this._skipImportRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
