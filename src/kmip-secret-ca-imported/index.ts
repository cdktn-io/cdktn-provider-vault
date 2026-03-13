/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KmipSecretCaImportedConfig extends cdktn.TerraformMetaArguments {
  /**
  * CA certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}
  */
  readonly caPem: string;
  /**
  * Name to identify the CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}
  */
  readonly namespace?: string;
  /**
  * Path where KMIP backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}
  */
  readonly path: string;
  /**
  * The field in the certificate to use for the role (CN, O, OU, or UID). Must specify exactly one of role_name or role_field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}
  */
  readonly roleField?: string;
  /**
  * The role name to associate with this CA. Must specify exactly one of role_name or role_field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}
  */
  readonly roleName?: string;
  /**
  * The field in the certificate to use for the scope (CN, O, OU, or UID). Must specify exactly one of scope_name or scope_field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}
  */
  readonly scopeField?: string;
  /**
  * The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}
  */
  readonly scopeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported vault_kmip_secret_ca_imported}
*/
export class KmipSecretCaImported extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kmip_secret_ca_imported";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmipSecretCaImported to import
  * @param importFromId The id of the existing KmipSecretCaImported that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmipSecretCaImported to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kmip_secret_ca_imported", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_ca_imported vault_kmip_secret_ca_imported} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmipSecretCaImportedConfig
  */
  public constructor(scope: Construct, id: string, config: KmipSecretCaImportedConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kmip_secret_ca_imported',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.8.0',
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
    this._caPem = config.caPem;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._roleField = config.roleField;
    this._roleName = config.roleName;
    this._scopeField = config.scopeField;
    this._scopeName = config.scopeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_pem - computed: false, optional: false, required: true
  private _caPem?: string; 
  public get caPem() {
    return this.getStringAttribute('ca_pem');
  }
  public set caPem(value: string) {
    this._caPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPemInput() {
    return this._caPem;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // role_field - computed: false, optional: true, required: false
  private _roleField?: string; 
  public get roleField() {
    return this.getStringAttribute('role_field');
  }
  public set roleField(value: string) {
    this._roleField = value;
  }
  public resetRoleField() {
    this._roleField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleFieldInput() {
    return this._roleField;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // scope_field - computed: false, optional: true, required: false
  private _scopeField?: string; 
  public get scopeField() {
    return this.getStringAttribute('scope_field');
  }
  public set scopeField(value: string) {
    this._scopeField = value;
  }
  public resetScopeField() {
    this._scopeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeFieldInput() {
    return this._scopeField;
  }

  // scope_name - computed: false, optional: true, required: false
  private _scopeName?: string; 
  public get scopeName() {
    return this.getStringAttribute('scope_name');
  }
  public set scopeName(value: string) {
    this._scopeName = value;
  }
  public resetScopeName() {
    this._scopeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeNameInput() {
    return this._scopeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_pem: cdktn.stringToTerraform(this._caPem),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      role_field: cdktn.stringToTerraform(this._roleField),
      role_name: cdktn.stringToTerraform(this._roleName),
      scope_field: cdktn.stringToTerraform(this._scopeField),
      scope_name: cdktn.stringToTerraform(this._scopeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_pem: {
        value: cdktn.stringToHclTerraform(this._caPem),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_field: {
        value: cdktn.stringToHclTerraform(this._roleField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktn.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_field: {
        value: cdktn.stringToHclTerraform(this._scopeField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_name: {
        value: cdktn.stringToHclTerraform(this._scopeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
