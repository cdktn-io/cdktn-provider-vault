# `ephemeralVaultCfAuthLogin` Submodule <a name="`ephemeralVaultCfAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultCfAuthLogin <a name="EphemeralVaultCfAuthLogin" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultcfauthlogin"

ephemeralvaultcfauthlogin.NewEphemeralVaultCfAuthLogin(scope Construct, id *string, config EphemeralVaultCfAuthLoginConfig) EphemeralVaultCfAuthLogin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMount` <a name="ResetMount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount"></a>

```go
func ResetMount()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultcfauthlogin"

ephemeralvaultcfauthlogin.EphemeralVaultCfAuthLogin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultcfauthlogin"

ephemeralvaultcfauthlogin.EphemeralVaultCfAuthLogin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultcfauthlogin"

ephemeralvaultcfauthlogin.EphemeralVaultCfAuthLogin_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable">Renewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput">CfInstanceCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput">SignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput">SigningTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert">CfInstanceCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime">SigningTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable"></a>

```go
func Renewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CfInstanceCertInput`<sup>Optional</sup> <a name="CfInstanceCertInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput"></a>

```go
func CfInstanceCertInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput"></a>

```go
func SignatureInput() *string
```

- *Type:* *string

---

##### `SigningTimeInput`<sup>Optional</sup> <a name="SigningTimeInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput"></a>

```go
func SigningTimeInput() *string
```

- *Type:* *string

---

##### `CfInstanceCert`<sup>Required</sup> <a name="CfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert"></a>

```go
func CfInstanceCert() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `SigningTime`<sup>Required</sup> <a name="SigningTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime"></a>

```go
func SigningTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultCfAuthLoginConfig <a name="EphemeralVaultCfAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultcfauthlogin"

&ephemeralvaultcfauthlogin.EphemeralVaultCfAuthLoginConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	CfInstanceCert: *string,
	Role: *string,
	Signature: *string,
	SigningTime: *string,
	Mount: *string,
	MountId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert">CfInstanceCert</a></code> | <code>*string</code> | The full body of the file available at the path denoted by `CF_INSTANCE_CERT`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role">Role</a></code> | <code>*string</code> | Name of the CF auth role to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature">Signature</a></code> | <code>*string</code> | The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime">SigningTime</a></code> | <code>*string</code> | The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CfInstanceCert`<sup>Required</sup> <a name="CfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert"></a>

```go
CfInstanceCert *string
```

- *Type:* *string

The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Name of the CF auth role to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature"></a>

```go
Signature *string
```

- *Type:* *string

The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}

---

##### `SigningTime`<sup>Required</sup> <a name="SigningTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime"></a>

```go
SigningTime *string
```

- *Type:* *string

The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}

---



