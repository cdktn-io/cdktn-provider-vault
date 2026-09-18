# `ephemeralVaultAzureAccessToken` Submodule <a name="`ephemeralVaultAzureAccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessToken <a name="EphemeralVaultAzureAccessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesstoken"

ephemeralvaultazureaccesstoken.NewEphemeralVaultAzureAccessToken(scope Construct, id *string, config EphemeralVaultAzureAccessTokenConfig) EphemeralVaultAzureAccessToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig">EphemeralVaultAzureAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig">EphemeralVaultAzureAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay">ResetRetryDelay</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRetryDelay` <a name="ResetRetryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay"></a>

```go
func ResetRetryDelay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesstoken"

ephemeralvaultazureaccesstoken.EphemeralVaultAzureAccessToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesstoken"

ephemeralvaultazureaccesstoken.EphemeralVaultAzureAccessToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesstoken"

ephemeralvaultazureaccesstoken.EphemeralVaultAzureAccessToken_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn">ExpiresIn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn">ExtExpiresIn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput">RetryDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `ExpiresIn`<sup>Required</sup> <a name="ExpiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn"></a>

```go
func ExpiresIn() *f64
```

- *Type:* *f64

---

##### `ExtExpiresIn`<sup>Required</sup> <a name="ExtExpiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn"></a>

```go
func ExtExpiresIn() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RetryDelayInput`<sup>Optional</sup> <a name="RetryDelayInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput"></a>

```go
func RetryDelayInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RetryDelay`<sup>Required</sup> <a name="RetryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay"></a>

```go
func RetryDelay() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessTokenConfig <a name="EphemeralVaultAzureAccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultazureaccesstoken"

&ephemeralvaultazureaccesstoken.EphemeralVaultAzureAccessTokenConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Mount: *string,
	Role: *string,
	Scope: *string,
	MaxRetries: *f64,
	MountId: *string,
	Namespace: *string,
	RetryDelay: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role">Role</a></code> | <code>*string</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope">Scope</a></code> | <code>*string</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `RetryDelay`<sup>Optional</sup> <a name="RetryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay"></a>

```go
RetryDelay *f64
```

- *Type:* *f64

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---



