# `ephemeralVaultKerberosAuthBackendLogin` Submodule <a name="`ephemeralVaultKerberosAuthBackendLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKerberosAuthBackendLogin <a name="EphemeralVaultKerberosAuthBackendLogin" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkerberosauthbackendlogin"

ephemeralvaultkerberosauthbackendlogin.NewEphemeralVaultKerberosAuthBackendLogin(scope Construct, id *string, config EphemeralVaultKerberosAuthBackendLoginConfig) EphemeralVaultKerberosAuthBackendLogin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation">ResetDisableFastNegotiation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName">ResetRemoveInstanceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisableFastNegotiation` <a name="ResetDisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation"></a>

```go
func ResetDisableFastNegotiation()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRemoveInstanceName` <a name="ResetRemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName"></a>

```go
func ResetRemoveInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkerberosauthbackendlogin"

ephemeralvaultkerberosauthbackendlogin.EphemeralVaultKerberosAuthBackendLogin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkerberosauthbackendlogin"

ephemeralvaultkerberosauthbackendlogin.EphemeralVaultKerberosAuthBackendLogin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkerberosauthbackendlogin"

ephemeralvaultkerberosauthbackendlogin.EphemeralVaultKerberosAuthBackendLogin_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor">Accessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies">IdentityPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata">Metadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan">Orphan</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable">Renewable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput">DisableFastNegotiationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput">KeytabPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput">Krb5ConfPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput">RealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput">RemoveInstanceNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath">KeytabPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm">Realm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName">RemoveInstanceName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor"></a>

```go
func Accessor() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `IdentityPolicies`<sup>Required</sup> <a name="IdentityPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies"></a>

```go
func IdentityPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan"></a>

```go
func Orphan() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable"></a>

```go
func Renewable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `DisableFastNegotiationInput`<sup>Optional</sup> <a name="DisableFastNegotiationInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput"></a>

```go
func DisableFastNegotiationInput() interface{}
```

- *Type:* interface{}

---

##### `KeytabPathInput`<sup>Optional</sup> <a name="KeytabPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput"></a>

```go
func KeytabPathInput() *string
```

- *Type:* *string

---

##### `Krb5ConfPathInput`<sup>Optional</sup> <a name="Krb5ConfPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput"></a>

```go
func Krb5ConfPathInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput"></a>

```go
func RealmInput() *string
```

- *Type:* *string

---

##### `RemoveInstanceNameInput`<sup>Optional</sup> <a name="RemoveInstanceNameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput"></a>

```go
func RemoveInstanceNameInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DisableFastNegotiation`<sup>Required</sup> <a name="DisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation"></a>

```go
func DisableFastNegotiation() interface{}
```

- *Type:* interface{}

---

##### `KeytabPath`<sup>Required</sup> <a name="KeytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath"></a>

```go
func KeytabPath() *string
```

- *Type:* *string

---

##### `Krb5ConfPath`<sup>Required</sup> <a name="Krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath"></a>

```go
func Krb5ConfPath() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm"></a>

```go
func Realm() *string
```

- *Type:* *string

---

##### `RemoveInstanceName`<sup>Required</sup> <a name="RemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName"></a>

```go
func RemoveInstanceName() interface{}
```

- *Type:* interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKerberosAuthBackendLoginConfig <a name="EphemeralVaultKerberosAuthBackendLoginConfig" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultkerberosauthbackendlogin"

&ephemeralvaultkerberosauthbackendlogin.EphemeralVaultKerberosAuthBackendLoginConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	KeytabPath: *string,
	Krb5ConfPath: *string,
	Mount: *string,
	Realm: *string,
	Service: *string,
	Username: *string,
	DisableFastNegotiation: interface{},
	MountId: *string,
	Namespace: *string,
	RemoveInstanceName: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath">KeytabPath</a></code> | <code>*string</code> | Path to the keytab file for authentication. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>*string</code> | Path to the krb5.conf configuration file. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the Kerberos auth method is mounted. Defaults to 'kerberos'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm">Realm</a></code> | <code>*string</code> | Kerberos realm name. Must match the UPNDomain in LDAP config. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service">Service</a></code> | <code>*string</code> | Service principal name for obtaining a service ticket. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username">Username</a></code> | <code>*string</code> | Username for the keytab entry. Must match a service account in LDAP. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>interface{}</code> | Disable FAST negotiation. Default: false. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName">RemoveInstanceName</a></code> | <code>interface{}</code> | Remove instance name from principal. Default: false. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `KeytabPath`<sup>Required</sup> <a name="KeytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath"></a>

```go
KeytabPath *string
```

- *Type:* *string

Path to the keytab file for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}

---

##### `Krb5ConfPath`<sup>Required</sup> <a name="Krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath"></a>

```go
Krb5ConfPath *string
```

- *Type:* *string

Path to the krb5.conf configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm"></a>

```go
Realm *string
```

- *Type:* *string

Kerberos realm name. Must match the UPNDomain in LDAP config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service principal name for obtaining a service ticket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the keytab entry. Must match a service account in LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}

---

##### `DisableFastNegotiation`<sup>Optional</sup> <a name="DisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation"></a>

```go
DisableFastNegotiation interface{}
```

- *Type:* interface{}

Disable FAST negotiation. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}

---

##### `RemoveInstanceName`<sup>Optional</sup> <a name="RemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName"></a>

```go
RemoveInstanceName interface{}
```

- *Type:* interface{}

Remove instance name from principal. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}

---



