/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigUiDefaultAuthConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of backup authentication methods. Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}
  */
  readonly backupAuthTypes?: string[];
  /**
  * The default authentication method. Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}
  */
  readonly defaultAuthType: string;
  /**
  * If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. **Note:** Removing this field from configuration will reset it to `false` in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}
  */
  readonly disableInheritance?: boolean | cdktn.IResolvable;
  /**
  * Unique identifier for the configuration. Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}
  */
  readonly namespace?: string;
  /**
  * Target namespace for the configuration. Empty string or omitted applies to root namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}
  */
  readonly namespacePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth vault_config_ui_default_auth}
*/
export class ConfigUiDefaultAuth extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_config_ui_default_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigUiDefaultAuth to import
  * @param importFromId The id of the existing ConfigUiDefaultAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigUiDefaultAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_config_ui_default_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth vault_config_ui_default_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigUiDefaultAuthConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigUiDefaultAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_config_ui_default_auth',
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
    this._backupAuthTypes = config.backupAuthTypes;
    this._defaultAuthType = config.defaultAuthType;
    this._disableInheritance = config.disableInheritance;
    this._name = config.name;
    this._namespace = config.namespace;
    this._namespacePath = config.namespacePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_auth_types - computed: false, optional: true, required: false
  private _backupAuthTypes?: string[]; 
  public get backupAuthTypes() {
    return this.getListAttribute('backup_auth_types');
  }
  public set backupAuthTypes(value: string[]) {
    this._backupAuthTypes = value;
  }
  public resetBackupAuthTypes() {
    this._backupAuthTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAuthTypesInput() {
    return this._backupAuthTypes;
  }

  // default_auth_type - computed: false, optional: false, required: true
  private _defaultAuthType?: string; 
  public get defaultAuthType() {
    return this.getStringAttribute('default_auth_type');
  }
  public set defaultAuthType(value: string) {
    this._defaultAuthType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthTypeInput() {
    return this._defaultAuthType;
  }

  // disable_inheritance - computed: false, optional: true, required: false
  private _disableInheritance?: boolean | cdktn.IResolvable; 
  public get disableInheritance() {
    return this.getBooleanAttribute('disable_inheritance');
  }
  public set disableInheritance(value: boolean | cdktn.IResolvable) {
    this._disableInheritance = value;
  }
  public resetDisableInheritance() {
    this._disableInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInheritanceInput() {
    return this._disableInheritance;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_path - computed: false, optional: true, required: false
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  public resetNamespacePath() {
    this._namespacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_auth_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._backupAuthTypes),
      default_auth_type: cdktn.stringToTerraform(this._defaultAuthType),
      disable_inheritance: cdktn.booleanToTerraform(this._disableInheritance),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      namespace_path: cdktn.stringToTerraform(this._namespacePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_auth_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._backupAuthTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_auth_type: {
        value: cdktn.stringToHclTerraform(this._defaultAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_inheritance: {
        value: cdktn.booleanToHclTerraform(this._disableInheritance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      namespace_path: {
        value: cdktn.stringToHclTerraform(this._namespacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
