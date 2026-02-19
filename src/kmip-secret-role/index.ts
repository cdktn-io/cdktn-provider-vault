/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KmipSecretRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Grant permission to use the KMIP Activate operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}
  */
  readonly operationActivate?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Add Attribute operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}
  */
  readonly operationAddAttribute?: boolean | cdktn.IResolvable;
  /**
  * Grant all permissions to this role. May not be specified with any other operation_* params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}
  */
  readonly operationAll?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Create operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}
  */
  readonly operationCreate?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Create Key Pair operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_create_key_pair KmipSecretRole#operation_create_key_pair}
  */
  readonly operationCreateKeyPair?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Decrypt operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_decrypt KmipSecretRole#operation_decrypt}
  */
  readonly operationDecrypt?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Delete Attribute operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_delete_attribute KmipSecretRole#operation_delete_attribute}
  */
  readonly operationDeleteAttribute?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Destroy operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}
  */
  readonly operationDestroy?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Discover Version operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}
  */
  readonly operationDiscoverVersions?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Encrypt operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_encrypt KmipSecretRole#operation_encrypt}
  */
  readonly operationEncrypt?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Get operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}
  */
  readonly operationGet?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Get Attribute List operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}
  */
  readonly operationGetAttributeList?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Get Attributes operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}
  */
  readonly operationGetAttributes?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Import operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_import KmipSecretRole#operation_import}
  */
  readonly operationImport?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Locate operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}
  */
  readonly operationLocate?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP MAC operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_mac KmipSecretRole#operation_mac}
  */
  readonly operationMac?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP MAC Verify operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_mac_verify KmipSecretRole#operation_mac_verify}
  */
  readonly operationMacVerify?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Modify Attribute operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_modify_attribute KmipSecretRole#operation_modify_attribute}
  */
  readonly operationModifyAttribute?: boolean | cdktn.IResolvable;
  /**
  * Remove all permissions from this role. May not be specified with any other operation_* params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}
  */
  readonly operationNone?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Query operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_query KmipSecretRole#operation_query}
  */
  readonly operationQuery?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Register operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}
  */
  readonly operationRegister?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Rekey operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}
  */
  readonly operationRekey?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Rekey Key Pair operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rekey_key_pair KmipSecretRole#operation_rekey_key_pair}
  */
  readonly operationRekeyKeyPair?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Revoke operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}
  */
  readonly operationRevoke?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP RNG Retrieve operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rng_retrieve KmipSecretRole#operation_rng_retrieve}
  */
  readonly operationRngRetrieve?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP RNG Seed operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rng_seed KmipSecretRole#operation_rng_seed}
  */
  readonly operationRngSeed?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Sign operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_sign KmipSecretRole#operation_sign}
  */
  readonly operationSign?: boolean | cdktn.IResolvable;
  /**
  * Grant permission to use the KMIP Signature Verify operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_signature_verify KmipSecretRole#operation_signature_verify}
  */
  readonly operationSignatureVerify?: boolean | cdktn.IResolvable;
  /**
  * Path where KMIP backend is mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}
  */
  readonly path: string;
  /**
  * Name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}
  */
  readonly role: string;
  /**
  * Name of the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}
  */
  readonly scope: string;
  /**
  * Client certificate key bits, valid values depend on key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}
  */
  readonly tlsClientKeyBits?: number;
  /**
  * Client certificate key type, rsa or ec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}
  */
  readonly tlsClientKeyType?: string;
  /**
  * Client certificate TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}
  */
  readonly tlsClientTtl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role vault_kmip_secret_role}
*/
export class KmipSecretRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kmip_secret_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KmipSecretRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmipSecretRole to import
  * @param importFromId The id of the existing KmipSecretRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmipSecretRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kmip_secret_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role vault_kmip_secret_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmipSecretRoleConfig
  */
  public constructor(scope: Construct, id: string, config: KmipSecretRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kmip_secret_role',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._operationActivate = config.operationActivate;
    this._operationAddAttribute = config.operationAddAttribute;
    this._operationAll = config.operationAll;
    this._operationCreate = config.operationCreate;
    this._operationCreateKeyPair = config.operationCreateKeyPair;
    this._operationDecrypt = config.operationDecrypt;
    this._operationDeleteAttribute = config.operationDeleteAttribute;
    this._operationDestroy = config.operationDestroy;
    this._operationDiscoverVersions = config.operationDiscoverVersions;
    this._operationEncrypt = config.operationEncrypt;
    this._operationGet = config.operationGet;
    this._operationGetAttributeList = config.operationGetAttributeList;
    this._operationGetAttributes = config.operationGetAttributes;
    this._operationImport = config.operationImport;
    this._operationLocate = config.operationLocate;
    this._operationMac = config.operationMac;
    this._operationMacVerify = config.operationMacVerify;
    this._operationModifyAttribute = config.operationModifyAttribute;
    this._operationNone = config.operationNone;
    this._operationQuery = config.operationQuery;
    this._operationRegister = config.operationRegister;
    this._operationRekey = config.operationRekey;
    this._operationRekeyKeyPair = config.operationRekeyKeyPair;
    this._operationRevoke = config.operationRevoke;
    this._operationRngRetrieve = config.operationRngRetrieve;
    this._operationRngSeed = config.operationRngSeed;
    this._operationSign = config.operationSign;
    this._operationSignatureVerify = config.operationSignatureVerify;
    this._path = config.path;
    this._role = config.role;
    this._scope = config.scope;
    this._tlsClientKeyBits = config.tlsClientKeyBits;
    this._tlsClientKeyType = config.tlsClientKeyType;
    this._tlsClientTtl = config.tlsClientTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // operation_activate - computed: true, optional: true, required: false
  private _operationActivate?: boolean | cdktn.IResolvable; 
  public get operationActivate() {
    return this.getBooleanAttribute('operation_activate');
  }
  public set operationActivate(value: boolean | cdktn.IResolvable) {
    this._operationActivate = value;
  }
  public resetOperationActivate() {
    this._operationActivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationActivateInput() {
    return this._operationActivate;
  }

  // operation_add_attribute - computed: true, optional: true, required: false
  private _operationAddAttribute?: boolean | cdktn.IResolvable; 
  public get operationAddAttribute() {
    return this.getBooleanAttribute('operation_add_attribute');
  }
  public set operationAddAttribute(value: boolean | cdktn.IResolvable) {
    this._operationAddAttribute = value;
  }
  public resetOperationAddAttribute() {
    this._operationAddAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationAddAttributeInput() {
    return this._operationAddAttribute;
  }

  // operation_all - computed: true, optional: true, required: false
  private _operationAll?: boolean | cdktn.IResolvable; 
  public get operationAll() {
    return this.getBooleanAttribute('operation_all');
  }
  public set operationAll(value: boolean | cdktn.IResolvable) {
    this._operationAll = value;
  }
  public resetOperationAll() {
    this._operationAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationAllInput() {
    return this._operationAll;
  }

  // operation_create - computed: true, optional: true, required: false
  private _operationCreate?: boolean | cdktn.IResolvable; 
  public get operationCreate() {
    return this.getBooleanAttribute('operation_create');
  }
  public set operationCreate(value: boolean | cdktn.IResolvable) {
    this._operationCreate = value;
  }
  public resetOperationCreate() {
    this._operationCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationCreateInput() {
    return this._operationCreate;
  }

  // operation_create_key_pair - computed: true, optional: true, required: false
  private _operationCreateKeyPair?: boolean | cdktn.IResolvable; 
  public get operationCreateKeyPair() {
    return this.getBooleanAttribute('operation_create_key_pair');
  }
  public set operationCreateKeyPair(value: boolean | cdktn.IResolvable) {
    this._operationCreateKeyPair = value;
  }
  public resetOperationCreateKeyPair() {
    this._operationCreateKeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationCreateKeyPairInput() {
    return this._operationCreateKeyPair;
  }

  // operation_decrypt - computed: true, optional: true, required: false
  private _operationDecrypt?: boolean | cdktn.IResolvable; 
  public get operationDecrypt() {
    return this.getBooleanAttribute('operation_decrypt');
  }
  public set operationDecrypt(value: boolean | cdktn.IResolvable) {
    this._operationDecrypt = value;
  }
  public resetOperationDecrypt() {
    this._operationDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDecryptInput() {
    return this._operationDecrypt;
  }

  // operation_delete_attribute - computed: true, optional: true, required: false
  private _operationDeleteAttribute?: boolean | cdktn.IResolvable; 
  public get operationDeleteAttribute() {
    return this.getBooleanAttribute('operation_delete_attribute');
  }
  public set operationDeleteAttribute(value: boolean | cdktn.IResolvable) {
    this._operationDeleteAttribute = value;
  }
  public resetOperationDeleteAttribute() {
    this._operationDeleteAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDeleteAttributeInput() {
    return this._operationDeleteAttribute;
  }

  // operation_destroy - computed: true, optional: true, required: false
  private _operationDestroy?: boolean | cdktn.IResolvable; 
  public get operationDestroy() {
    return this.getBooleanAttribute('operation_destroy');
  }
  public set operationDestroy(value: boolean | cdktn.IResolvable) {
    this._operationDestroy = value;
  }
  public resetOperationDestroy() {
    this._operationDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDestroyInput() {
    return this._operationDestroy;
  }

  // operation_discover_versions - computed: true, optional: true, required: false
  private _operationDiscoverVersions?: boolean | cdktn.IResolvable; 
  public get operationDiscoverVersions() {
    return this.getBooleanAttribute('operation_discover_versions');
  }
  public set operationDiscoverVersions(value: boolean | cdktn.IResolvable) {
    this._operationDiscoverVersions = value;
  }
  public resetOperationDiscoverVersions() {
    this._operationDiscoverVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDiscoverVersionsInput() {
    return this._operationDiscoverVersions;
  }

  // operation_encrypt - computed: true, optional: true, required: false
  private _operationEncrypt?: boolean | cdktn.IResolvable; 
  public get operationEncrypt() {
    return this.getBooleanAttribute('operation_encrypt');
  }
  public set operationEncrypt(value: boolean | cdktn.IResolvable) {
    this._operationEncrypt = value;
  }
  public resetOperationEncrypt() {
    this._operationEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationEncryptInput() {
    return this._operationEncrypt;
  }

  // operation_get - computed: true, optional: true, required: false
  private _operationGet?: boolean | cdktn.IResolvable; 
  public get operationGet() {
    return this.getBooleanAttribute('operation_get');
  }
  public set operationGet(value: boolean | cdktn.IResolvable) {
    this._operationGet = value;
  }
  public resetOperationGet() {
    this._operationGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetInput() {
    return this._operationGet;
  }

  // operation_get_attribute_list - computed: true, optional: true, required: false
  private _operationGetAttributeList?: boolean | cdktn.IResolvable; 
  public get operationGetAttributeList() {
    return this.getBooleanAttribute('operation_get_attribute_list');
  }
  public set operationGetAttributeList(value: boolean | cdktn.IResolvable) {
    this._operationGetAttributeList = value;
  }
  public resetOperationGetAttributeList() {
    this._operationGetAttributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetAttributeListInput() {
    return this._operationGetAttributeList;
  }

  // operation_get_attributes - computed: true, optional: true, required: false
  private _operationGetAttributes?: boolean | cdktn.IResolvable; 
  public get operationGetAttributes() {
    return this.getBooleanAttribute('operation_get_attributes');
  }
  public set operationGetAttributes(value: boolean | cdktn.IResolvable) {
    this._operationGetAttributes = value;
  }
  public resetOperationGetAttributes() {
    this._operationGetAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetAttributesInput() {
    return this._operationGetAttributes;
  }

  // operation_import - computed: true, optional: true, required: false
  private _operationImport?: boolean | cdktn.IResolvable; 
  public get operationImport() {
    return this.getBooleanAttribute('operation_import');
  }
  public set operationImport(value: boolean | cdktn.IResolvable) {
    this._operationImport = value;
  }
  public resetOperationImport() {
    this._operationImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationImportInput() {
    return this._operationImport;
  }

  // operation_locate - computed: true, optional: true, required: false
  private _operationLocate?: boolean | cdktn.IResolvable; 
  public get operationLocate() {
    return this.getBooleanAttribute('operation_locate');
  }
  public set operationLocate(value: boolean | cdktn.IResolvable) {
    this._operationLocate = value;
  }
  public resetOperationLocate() {
    this._operationLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLocateInput() {
    return this._operationLocate;
  }

  // operation_mac - computed: true, optional: true, required: false
  private _operationMac?: boolean | cdktn.IResolvable; 
  public get operationMac() {
    return this.getBooleanAttribute('operation_mac');
  }
  public set operationMac(value: boolean | cdktn.IResolvable) {
    this._operationMac = value;
  }
  public resetOperationMac() {
    this._operationMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationMacInput() {
    return this._operationMac;
  }

  // operation_mac_verify - computed: true, optional: true, required: false
  private _operationMacVerify?: boolean | cdktn.IResolvable; 
  public get operationMacVerify() {
    return this.getBooleanAttribute('operation_mac_verify');
  }
  public set operationMacVerify(value: boolean | cdktn.IResolvable) {
    this._operationMacVerify = value;
  }
  public resetOperationMacVerify() {
    this._operationMacVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationMacVerifyInput() {
    return this._operationMacVerify;
  }

  // operation_modify_attribute - computed: true, optional: true, required: false
  private _operationModifyAttribute?: boolean | cdktn.IResolvable; 
  public get operationModifyAttribute() {
    return this.getBooleanAttribute('operation_modify_attribute');
  }
  public set operationModifyAttribute(value: boolean | cdktn.IResolvable) {
    this._operationModifyAttribute = value;
  }
  public resetOperationModifyAttribute() {
    this._operationModifyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModifyAttributeInput() {
    return this._operationModifyAttribute;
  }

  // operation_none - computed: true, optional: true, required: false
  private _operationNone?: boolean | cdktn.IResolvable; 
  public get operationNone() {
    return this.getBooleanAttribute('operation_none');
  }
  public set operationNone(value: boolean | cdktn.IResolvable) {
    this._operationNone = value;
  }
  public resetOperationNone() {
    this._operationNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNoneInput() {
    return this._operationNone;
  }

  // operation_query - computed: true, optional: true, required: false
  private _operationQuery?: boolean | cdktn.IResolvable; 
  public get operationQuery() {
    return this.getBooleanAttribute('operation_query');
  }
  public set operationQuery(value: boolean | cdktn.IResolvable) {
    this._operationQuery = value;
  }
  public resetOperationQuery() {
    this._operationQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationQueryInput() {
    return this._operationQuery;
  }

  // operation_register - computed: true, optional: true, required: false
  private _operationRegister?: boolean | cdktn.IResolvable; 
  public get operationRegister() {
    return this.getBooleanAttribute('operation_register');
  }
  public set operationRegister(value: boolean | cdktn.IResolvable) {
    this._operationRegister = value;
  }
  public resetOperationRegister() {
    this._operationRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRegisterInput() {
    return this._operationRegister;
  }

  // operation_rekey - computed: true, optional: true, required: false
  private _operationRekey?: boolean | cdktn.IResolvable; 
  public get operationRekey() {
    return this.getBooleanAttribute('operation_rekey');
  }
  public set operationRekey(value: boolean | cdktn.IResolvable) {
    this._operationRekey = value;
  }
  public resetOperationRekey() {
    this._operationRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRekeyInput() {
    return this._operationRekey;
  }

  // operation_rekey_key_pair - computed: true, optional: true, required: false
  private _operationRekeyKeyPair?: boolean | cdktn.IResolvable; 
  public get operationRekeyKeyPair() {
    return this.getBooleanAttribute('operation_rekey_key_pair');
  }
  public set operationRekeyKeyPair(value: boolean | cdktn.IResolvable) {
    this._operationRekeyKeyPair = value;
  }
  public resetOperationRekeyKeyPair() {
    this._operationRekeyKeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRekeyKeyPairInput() {
    return this._operationRekeyKeyPair;
  }

  // operation_revoke - computed: true, optional: true, required: false
  private _operationRevoke?: boolean | cdktn.IResolvable; 
  public get operationRevoke() {
    return this.getBooleanAttribute('operation_revoke');
  }
  public set operationRevoke(value: boolean | cdktn.IResolvable) {
    this._operationRevoke = value;
  }
  public resetOperationRevoke() {
    this._operationRevoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRevokeInput() {
    return this._operationRevoke;
  }

  // operation_rng_retrieve - computed: true, optional: true, required: false
  private _operationRngRetrieve?: boolean | cdktn.IResolvable; 
  public get operationRngRetrieve() {
    return this.getBooleanAttribute('operation_rng_retrieve');
  }
  public set operationRngRetrieve(value: boolean | cdktn.IResolvable) {
    this._operationRngRetrieve = value;
  }
  public resetOperationRngRetrieve() {
    this._operationRngRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRngRetrieveInput() {
    return this._operationRngRetrieve;
  }

  // operation_rng_seed - computed: true, optional: true, required: false
  private _operationRngSeed?: boolean | cdktn.IResolvable; 
  public get operationRngSeed() {
    return this.getBooleanAttribute('operation_rng_seed');
  }
  public set operationRngSeed(value: boolean | cdktn.IResolvable) {
    this._operationRngSeed = value;
  }
  public resetOperationRngSeed() {
    this._operationRngSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRngSeedInput() {
    return this._operationRngSeed;
  }

  // operation_sign - computed: true, optional: true, required: false
  private _operationSign?: boolean | cdktn.IResolvable; 
  public get operationSign() {
    return this.getBooleanAttribute('operation_sign');
  }
  public set operationSign(value: boolean | cdktn.IResolvable) {
    this._operationSign = value;
  }
  public resetOperationSign() {
    this._operationSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationSignInput() {
    return this._operationSign;
  }

  // operation_signature_verify - computed: true, optional: true, required: false
  private _operationSignatureVerify?: boolean | cdktn.IResolvable; 
  public get operationSignatureVerify() {
    return this.getBooleanAttribute('operation_signature_verify');
  }
  public set operationSignatureVerify(value: boolean | cdktn.IResolvable) {
    this._operationSignatureVerify = value;
  }
  public resetOperationSignatureVerify() {
    this._operationSignatureVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationSignatureVerifyInput() {
    return this._operationSignatureVerify;
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

  // tls_client_key_bits - computed: false, optional: true, required: false
  private _tlsClientKeyBits?: number; 
  public get tlsClientKeyBits() {
    return this.getNumberAttribute('tls_client_key_bits');
  }
  public set tlsClientKeyBits(value: number) {
    this._tlsClientKeyBits = value;
  }
  public resetTlsClientKeyBits() {
    this._tlsClientKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyBitsInput() {
    return this._tlsClientKeyBits;
  }

  // tls_client_key_type - computed: false, optional: true, required: false
  private _tlsClientKeyType?: string; 
  public get tlsClientKeyType() {
    return this.getStringAttribute('tls_client_key_type');
  }
  public set tlsClientKeyType(value: string) {
    this._tlsClientKeyType = value;
  }
  public resetTlsClientKeyType() {
    this._tlsClientKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyTypeInput() {
    return this._tlsClientKeyType;
  }

  // tls_client_ttl - computed: false, optional: true, required: false
  private _tlsClientTtl?: number; 
  public get tlsClientTtl() {
    return this.getNumberAttribute('tls_client_ttl');
  }
  public set tlsClientTtl(value: number) {
    this._tlsClientTtl = value;
  }
  public resetTlsClientTtl() {
    this._tlsClientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientTtlInput() {
    return this._tlsClientTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      namespace: cdktn.stringToTerraform(this._namespace),
      operation_activate: cdktn.booleanToTerraform(this._operationActivate),
      operation_add_attribute: cdktn.booleanToTerraform(this._operationAddAttribute),
      operation_all: cdktn.booleanToTerraform(this._operationAll),
      operation_create: cdktn.booleanToTerraform(this._operationCreate),
      operation_create_key_pair: cdktn.booleanToTerraform(this._operationCreateKeyPair),
      operation_decrypt: cdktn.booleanToTerraform(this._operationDecrypt),
      operation_delete_attribute: cdktn.booleanToTerraform(this._operationDeleteAttribute),
      operation_destroy: cdktn.booleanToTerraform(this._operationDestroy),
      operation_discover_versions: cdktn.booleanToTerraform(this._operationDiscoverVersions),
      operation_encrypt: cdktn.booleanToTerraform(this._operationEncrypt),
      operation_get: cdktn.booleanToTerraform(this._operationGet),
      operation_get_attribute_list: cdktn.booleanToTerraform(this._operationGetAttributeList),
      operation_get_attributes: cdktn.booleanToTerraform(this._operationGetAttributes),
      operation_import: cdktn.booleanToTerraform(this._operationImport),
      operation_locate: cdktn.booleanToTerraform(this._operationLocate),
      operation_mac: cdktn.booleanToTerraform(this._operationMac),
      operation_mac_verify: cdktn.booleanToTerraform(this._operationMacVerify),
      operation_modify_attribute: cdktn.booleanToTerraform(this._operationModifyAttribute),
      operation_none: cdktn.booleanToTerraform(this._operationNone),
      operation_query: cdktn.booleanToTerraform(this._operationQuery),
      operation_register: cdktn.booleanToTerraform(this._operationRegister),
      operation_rekey: cdktn.booleanToTerraform(this._operationRekey),
      operation_rekey_key_pair: cdktn.booleanToTerraform(this._operationRekeyKeyPair),
      operation_revoke: cdktn.booleanToTerraform(this._operationRevoke),
      operation_rng_retrieve: cdktn.booleanToTerraform(this._operationRngRetrieve),
      operation_rng_seed: cdktn.booleanToTerraform(this._operationRngSeed),
      operation_sign: cdktn.booleanToTerraform(this._operationSign),
      operation_signature_verify: cdktn.booleanToTerraform(this._operationSignatureVerify),
      path: cdktn.stringToTerraform(this._path),
      role: cdktn.stringToTerraform(this._role),
      scope: cdktn.stringToTerraform(this._scope),
      tls_client_key_bits: cdktn.numberToTerraform(this._tlsClientKeyBits),
      tls_client_key_type: cdktn.stringToTerraform(this._tlsClientKeyType),
      tls_client_ttl: cdktn.numberToTerraform(this._tlsClientTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      operation_activate: {
        value: cdktn.booleanToHclTerraform(this._operationActivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_add_attribute: {
        value: cdktn.booleanToHclTerraform(this._operationAddAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_all: {
        value: cdktn.booleanToHclTerraform(this._operationAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_create: {
        value: cdktn.booleanToHclTerraform(this._operationCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_create_key_pair: {
        value: cdktn.booleanToHclTerraform(this._operationCreateKeyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_decrypt: {
        value: cdktn.booleanToHclTerraform(this._operationDecrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_delete_attribute: {
        value: cdktn.booleanToHclTerraform(this._operationDeleteAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_destroy: {
        value: cdktn.booleanToHclTerraform(this._operationDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_discover_versions: {
        value: cdktn.booleanToHclTerraform(this._operationDiscoverVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_encrypt: {
        value: cdktn.booleanToHclTerraform(this._operationEncrypt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get: {
        value: cdktn.booleanToHclTerraform(this._operationGet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get_attribute_list: {
        value: cdktn.booleanToHclTerraform(this._operationGetAttributeList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get_attributes: {
        value: cdktn.booleanToHclTerraform(this._operationGetAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_import: {
        value: cdktn.booleanToHclTerraform(this._operationImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_locate: {
        value: cdktn.booleanToHclTerraform(this._operationLocate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_mac: {
        value: cdktn.booleanToHclTerraform(this._operationMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_mac_verify: {
        value: cdktn.booleanToHclTerraform(this._operationMacVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_modify_attribute: {
        value: cdktn.booleanToHclTerraform(this._operationModifyAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_none: {
        value: cdktn.booleanToHclTerraform(this._operationNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_query: {
        value: cdktn.booleanToHclTerraform(this._operationQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_register: {
        value: cdktn.booleanToHclTerraform(this._operationRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_rekey: {
        value: cdktn.booleanToHclTerraform(this._operationRekey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_rekey_key_pair: {
        value: cdktn.booleanToHclTerraform(this._operationRekeyKeyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_revoke: {
        value: cdktn.booleanToHclTerraform(this._operationRevoke),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_rng_retrieve: {
        value: cdktn.booleanToHclTerraform(this._operationRngRetrieve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_rng_seed: {
        value: cdktn.booleanToHclTerraform(this._operationRngSeed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_sign: {
        value: cdktn.booleanToHclTerraform(this._operationSign),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_signature_verify: {
        value: cdktn.booleanToHclTerraform(this._operationSignatureVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tls_client_key_bits: {
        value: cdktn.numberToHclTerraform(this._tlsClientKeyBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_client_key_type: {
        value: cdktn.stringToHclTerraform(this._tlsClientKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_ttl: {
        value: cdktn.numberToHclTerraform(this._tlsClientTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
