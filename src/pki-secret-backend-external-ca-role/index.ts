/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendExternalCaRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ACME account to use when validating certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#acme_account_name PkiSecretBackendExternalCaRole#acme_account_name}
  */
  readonly acmeAccountName: string;
  /**
  * The list of challenge types that are allowed to be used. Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_challenge_types PkiSecretBackendExternalCaRole#allowed_challenge_types}
  */
  readonly allowedChallengeTypes?: string[];
  /**
  * A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domain_options PkiSecretBackendExternalCaRole#allowed_domain_options}
  */
  readonly allowedDomainOptions?: string[];
  /**
  * A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domains PkiSecretBackendExternalCaRole#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * The key type and size/parameters to use when generating a new key if running in the identifier workflow. Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_generate_key_type PkiSecretBackendExternalCaRole#csr_generate_key_type}
  */
  readonly csrGenerateKeyType?: string;
  /**
  * The technique used to populate a CSR from the provided identifiers in the identifier workflow. Valid values are: `cn_first`, `sans_only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_identifier_population PkiSecretBackendExternalCaRole#csr_identifier_population}
  */
  readonly csrIdentifierPopulation?: string;
  /**
  * Force deletion even when active orders exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#force PkiSecretBackendExternalCaRole#force}
  */
  readonly force?: boolean | cdktn.IResolvable;
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#mount PkiSecretBackendExternalCaRole#mount}
  */
  readonly mount: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#name PkiSecretBackendExternalCaRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#namespace PkiSecretBackendExternalCaRole#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role vault_pki_secret_backend_external_ca_role}
*/
export class PkiSecretBackendExternalCaRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_external_ca_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendExternalCaRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendExternalCaRole to import
  * @param importFromId The id of the existing PkiSecretBackendExternalCaRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendExternalCaRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_external_ca_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role vault_pki_secret_backend_external_ca_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendExternalCaRoleConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendExternalCaRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_external_ca_role',
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
    this._acmeAccountName = config.acmeAccountName;
    this._allowedChallengeTypes = config.allowedChallengeTypes;
    this._allowedDomainOptions = config.allowedDomainOptions;
    this._allowedDomains = config.allowedDomains;
    this._csrGenerateKeyType = config.csrGenerateKeyType;
    this._csrIdentifierPopulation = config.csrIdentifierPopulation;
    this._force = config.force;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_account_name - computed: false, optional: false, required: true
  private _acmeAccountName?: string; 
  public get acmeAccountName() {
    return this.getStringAttribute('acme_account_name');
  }
  public set acmeAccountName(value: string) {
    this._acmeAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeAccountNameInput() {
    return this._acmeAccountName;
  }

  // allowed_challenge_types - computed: true, optional: true, required: false
  private _allowedChallengeTypes?: string[]; 
  public get allowedChallengeTypes() {
    return this.getListAttribute('allowed_challenge_types');
  }
  public set allowedChallengeTypes(value: string[]) {
    this._allowedChallengeTypes = value;
  }
  public resetAllowedChallengeTypes() {
    this._allowedChallengeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedChallengeTypesInput() {
    return this._allowedChallengeTypes;
  }

  // allowed_domain_options - computed: true, optional: true, required: false
  private _allowedDomainOptions?: string[]; 
  public get allowedDomainOptions() {
    return this.getListAttribute('allowed_domain_options');
  }
  public set allowedDomainOptions(value: string[]) {
    this._allowedDomainOptions = value;
  }
  public resetAllowedDomainOptions() {
    this._allowedDomainOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainOptionsInput() {
    return this._allowedDomainOptions;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // csr_generate_key_type - computed: true, optional: true, required: false
  private _csrGenerateKeyType?: string; 
  public get csrGenerateKeyType() {
    return this.getStringAttribute('csr_generate_key_type');
  }
  public set csrGenerateKeyType(value: string) {
    this._csrGenerateKeyType = value;
  }
  public resetCsrGenerateKeyType() {
    this._csrGenerateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrGenerateKeyTypeInput() {
    return this._csrGenerateKeyType;
  }

  // csr_identifier_population - computed: true, optional: true, required: false
  private _csrIdentifierPopulation?: string; 
  public get csrIdentifierPopulation() {
    return this.getStringAttribute('csr_identifier_population');
  }
  public set csrIdentifierPopulation(value: string) {
    this._csrIdentifierPopulation = value;
  }
  public resetCsrIdentifierPopulation() {
    this._csrIdentifierPopulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrIdentifierPopulationInput() {
    return this._csrIdentifierPopulation;
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktn.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktn.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_account_name: cdktn.stringToTerraform(this._acmeAccountName),
      allowed_challenge_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedChallengeTypes),
      allowed_domain_options: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedDomainOptions),
      allowed_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedDomains),
      csr_generate_key_type: cdktn.stringToTerraform(this._csrGenerateKeyType),
      csr_identifier_population: cdktn.stringToTerraform(this._csrIdentifierPopulation),
      force: cdktn.booleanToTerraform(this._force),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_account_name: {
        value: cdktn.stringToHclTerraform(this._acmeAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_challenge_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedChallengeTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_domain_options: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedDomainOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_domains: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      csr_generate_key_type: {
        value: cdktn.stringToHclTerraform(this._csrGenerateKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_identifier_population: {
        value: cdktn.stringToHclTerraform(this._csrIdentifierPopulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktn.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
