# `samlAuthBackend` Submodule <a name="`samlAuthBackend` Submodule" id="@cdktn/provider-vault.samlAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackend <a name="SamlAuthBackend" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend vault_saml_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackend;

SamlAuthBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acsUrls(java.util.List<java.lang.String>)
    .entityId(java.lang.String)
//  .defaultRole(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .idpCert(java.lang.String)
//  .idpEntityId(java.lang.String)
//  .idpMetadataUrl(java.lang.String)
//  .idpSsoUrl(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .tune(IResolvable|java.util.List<SamlAuthBackendTune>)
//  .validateAssertionSignature(java.lang.Boolean|IResolvable)
//  .validateResponseSignature(java.lang.Boolean|IResolvable)
//  .verboseLogging(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.acsUrls">acsUrls</a></code> | <code>java.util.List<java.lang.String></code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpCert">idpCert</a></code> | <code>java.lang.String</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.tune">tune</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.validateAssertionSignature">validateAssertionSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to validate the assertion signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.validateResponseSignature">validateResponseSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to validate the response signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.verboseLogging">verboseLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acsUrls`<sup>Required</sup> <a name="acsUrls" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.acsUrls"></a>

- *Type:* java.util.List<java.lang.String>

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.defaultRole"></a>

- *Type:* java.lang.String

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpCert`<sup>Optional</sup> <a name="idpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpCert"></a>

- *Type:* java.lang.String

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `idpEntityId`<sup>Optional</sup> <a name="idpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpEntityId"></a>

- *Type:* java.lang.String

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpMetadataUrl"></a>

- *Type:* java.lang.String

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `idpSsoUrl`<sup>Optional</sup> <a name="idpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpSsoUrl"></a>

- *Type:* java.lang.String

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.tune"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}.

---

##### `validateAssertionSignature`<sup>Optional</sup> <a name="validateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.validateAssertionSignature"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to validate the assertion signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_assertion_signature SamlAuthBackend#validate_assertion_signature}

---

##### `validateResponseSignature`<sup>Optional</sup> <a name="validateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.validateResponseSignature"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to validate the response signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_response_signature SamlAuthBackend#validate_response_signature}

---

##### `verboseLogging`<sup>Optional</sup> <a name="verboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.verboseLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert">resetIdpCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId">resetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl">resetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetTune">resetTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateAssertionSignature">resetValidateAssertionSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateResponseSignature">resetValidateResponseSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging">resetVerboseLogging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTune` <a name="putTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune"></a>

```java
public void putTune(IResolvable|java.util.List<SamlAuthBackendTune> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.putTune.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>>

---

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole"></a>

```java
public void resetDefaultRole()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdpCert` <a name="resetIdpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert"></a>

```java
public void resetIdpCert()
```

##### `resetIdpEntityId` <a name="resetIdpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId"></a>

```java
public void resetIdpEntityId()
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl"></a>

```java
public void resetIdpMetadataUrl()
```

##### `resetIdpSsoUrl` <a name="resetIdpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl"></a>

```java
public void resetIdpSsoUrl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetTune` <a name="resetTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetTune"></a>

```java
public void resetTune()
```

##### `resetValidateAssertionSignature` <a name="resetValidateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateAssertionSignature"></a>

```java
public void resetValidateAssertionSignature()
```

##### `resetValidateResponseSignature` <a name="resetValidateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetValidateResponseSignature"></a>

```java
public void resetValidateResponseSignature()
```

##### `resetVerboseLogging` <a name="resetVerboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging"></a>

```java
public void resetVerboseLogging()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SamlAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackend;

SamlAuthBackend.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackend;

SamlAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackend;

SamlAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackend;

SamlAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SamlAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SamlAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SamlAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SamlAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SamlAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList">SamlAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput">acsUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput">defaultRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput">idpCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput">idpSsoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tuneInput">tuneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignatureInput">validateAssertionSignatureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignatureInput">validateResponseSignatureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput">verboseLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls">acsUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert">idpCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignature">validateAssertionSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignature">validateResponseSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging">verboseLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tune"></a>

```java
public SamlAuthBackendTuneList getTune();
```

- *Type:* <a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList">SamlAuthBackendTuneList</a>

---

##### `acsUrlsInput`<sup>Optional</sup> <a name="acsUrlsInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAcsUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput"></a>

```java
public java.lang.String getDefaultRoleInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpCertInput`<sup>Optional</sup> <a name="idpCertInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput"></a>

```java
public java.lang.String getIdpCertInput();
```

- *Type:* java.lang.String

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput"></a>

```java
public java.lang.String getIdpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput"></a>

```java
public java.lang.String getIdpMetadataUrlInput();
```

- *Type:* java.lang.String

---

##### `idpSsoUrlInput`<sup>Optional</sup> <a name="idpSsoUrlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput"></a>

```java
public java.lang.String getIdpSsoUrlInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tuneInput"></a>

```java
public IResolvable|java.util.List<SamlAuthBackendTune> getTuneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>>

---

##### `validateAssertionSignatureInput`<sup>Optional</sup> <a name="validateAssertionSignatureInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignatureInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateAssertionSignatureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validateResponseSignatureInput`<sup>Optional</sup> <a name="validateResponseSignatureInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignatureInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateResponseSignatureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `verboseLoggingInput`<sup>Optional</sup> <a name="verboseLoggingInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getVerboseLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `acsUrls`<sup>Required</sup> <a name="acsUrls" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls"></a>

```java
public java.util.List<java.lang.String> getAcsUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert"></a>

```java
public java.lang.String getIdpCert();
```

- *Type:* java.lang.String

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

---

##### `idpSsoUrl`<sup>Required</sup> <a name="idpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl"></a>

```java
public java.lang.String getIdpSsoUrl();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `validateAssertionSignature`<sup>Required</sup> <a name="validateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateAssertionSignature"></a>

```java
public java.lang.Boolean|IResolvable getValidateAssertionSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validateResponseSignature`<sup>Required</sup> <a name="validateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.validateResponseSignature"></a>

```java
public java.lang.Boolean|IResolvable getValidateResponseSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `verboseLogging`<sup>Required</sup> <a name="verboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging"></a>

```java
public java.lang.Boolean|IResolvable getVerboseLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendConfig <a name="SamlAuthBackendConfig" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackendConfig;

SamlAuthBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acsUrls(java.util.List<java.lang.String>)
    .entityId(java.lang.String)
//  .defaultRole(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .idpCert(java.lang.String)
//  .idpEntityId(java.lang.String)
//  .idpMetadataUrl(java.lang.String)
//  .idpSsoUrl(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .tune(IResolvable|java.util.List<SamlAuthBackendTune>)
//  .validateAssertionSignature(java.lang.Boolean|IResolvable)
//  .validateResponseSignature(java.lang.Boolean|IResolvable)
//  .verboseLogging(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls">acsUrls</a></code> | <code>java.util.List<java.lang.String></code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert">idpCert</a></code> | <code>java.lang.String</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.tune">tune</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateAssertionSignature">validateAssertionSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to validate the assertion signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateResponseSignature">validateResponseSignature</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to validate the response signature. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging">verboseLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acsUrls`<sup>Required</sup> <a name="acsUrls" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls"></a>

```java
public java.util.List<java.lang.String> getAcsUrls();
```

- *Type:* java.util.List<java.lang.String>

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpCert`<sup>Optional</sup> <a name="idpCert" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert"></a>

```java
public java.lang.String getIdpCert();
```

- *Type:* java.lang.String

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `idpEntityId`<sup>Optional</sup> <a name="idpEntityId" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `idpSsoUrl`<sup>Optional</sup> <a name="idpSsoUrl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl"></a>

```java
public java.lang.String getIdpSsoUrl();
```

- *Type:* java.lang.String

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.tune"></a>

```java
public IResolvable|java.util.List<SamlAuthBackendTune> getTune();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}.

---

##### `validateAssertionSignature`<sup>Optional</sup> <a name="validateAssertionSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateAssertionSignature"></a>

```java
public java.lang.Boolean|IResolvable getValidateAssertionSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to validate the assertion signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_assertion_signature SamlAuthBackend#validate_assertion_signature}

---

##### `validateResponseSignature`<sup>Optional</sup> <a name="validateResponseSignature" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.validateResponseSignature"></a>

```java
public java.lang.Boolean|IResolvable getValidateResponseSignature();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to validate the response signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#validate_response_signature SamlAuthBackend#validate_response_signature}

---

##### `verboseLogging`<sup>Optional</sup> <a name="verboseLogging" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging"></a>

```java
public java.lang.Boolean|IResolvable getVerboseLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---

### SamlAuthBackendTune <a name="SamlAuthBackendTune" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.Initializer"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackendTune;

SamlAuthBackendTune.builder()
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtl(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .maxLeaseTtl(java.lang.String)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#allowed_response_headers SamlAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_request_keys SamlAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_response_keys SamlAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_lease_ttl SamlAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#listing_visibility SamlAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#max_lease_ttl SamlAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#passthrough_request_headers SamlAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#token_type SamlAuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#allowed_response_headers SamlAuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_request_keys SamlAuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#audit_non_hmac_response_keys SamlAuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#default_lease_ttl SamlAuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#listing_visibility SamlAuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#max_lease_ttl SamlAuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#passthrough_request_headers SamlAuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/saml_auth_backend#token_type SamlAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAuthBackendTuneList <a name="SamlAuthBackendTuneList" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackendTuneList;

new SamlAuthBackendTuneList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get"></a>

```java
public SamlAuthBackendTuneOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SamlAuthBackendTune> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>>

---


### SamlAuthBackendTuneOutputReference <a name="SamlAuthBackendTuneOutputReference" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.saml_auth_backend.SamlAuthBackendTuneOutputReference;

new SamlAuthBackendTuneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```java
public void resetDefaultLeaseTtl()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```java
public void resetMaxLeaseTtl()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.resetTokenType"></a>

```java
public void resetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```java
public java.lang.String getDefaultLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```java
public java.lang.String getMaxLeaseTtlInput();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```java
public java.lang.String getDefaultLeaseTtl();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```java
public java.lang.String getMaxLeaseTtl();
```

- *Type:* java.lang.String

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTuneOutputReference.property.internalValue"></a>

```java
public IResolvable|SamlAuthBackendTune getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.samlAuthBackend.SamlAuthBackendTune">SamlAuthBackendTune</a>

---



