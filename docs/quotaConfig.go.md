# `quotaConfig` Submodule <a name="`quotaConfig` Submodule" id="@cdktn/provider-vault.quotaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaConfig <a name="QuotaConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config vault_quota_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

quotaconfig.NewQuotaConfig(scope Construct, id *string, config QuotaConfigConfig) QuotaConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig">QuotaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths">ResetAbsoluteRateLimitExemptPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging">ResetEnableRateLimitAuditLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders">ResetEnableRateLimitResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths">ResetRateLimitExemptPaths</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAbsoluteRateLimitExemptPaths` <a name="ResetAbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetAbsoluteRateLimitExemptPaths"></a>

```go
func ResetAbsoluteRateLimitExemptPaths()
```

##### `ResetEnableRateLimitAuditLogging` <a name="ResetEnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitAuditLogging"></a>

```go
func ResetEnableRateLimitAuditLogging()
```

##### `ResetEnableRateLimitResponseHeaders` <a name="ResetEnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetEnableRateLimitResponseHeaders"></a>

```go
func ResetEnableRateLimitResponseHeaders()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRateLimitExemptPaths` <a name="ResetRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.resetRateLimitExemptPaths"></a>

```go
func ResetRateLimitExemptPaths()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

quotaconfig.QuotaConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

quotaconfig.QuotaConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

quotaconfig.QuotaConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

quotaconfig.QuotaConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuotaConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuotaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuotaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput">AbsoluteRateLimitExemptPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput">EnableRateLimitAuditLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput">EnableRateLimitResponseHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput">RateLimitExemptPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths">AbsoluteRateLimitExemptPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging">EnableRateLimitAuditLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders">EnableRateLimitResponseHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths">RateLimitExemptPaths</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbsoluteRateLimitExemptPathsInput`<sup>Optional</sup> <a name="AbsoluteRateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPathsInput"></a>

```go
func AbsoluteRateLimitExemptPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRateLimitAuditLoggingInput`<sup>Optional</sup> <a name="EnableRateLimitAuditLoggingInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLoggingInput"></a>

```go
func EnableRateLimitAuditLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableRateLimitResponseHeadersInput`<sup>Optional</sup> <a name="EnableRateLimitResponseHeadersInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeadersInput"></a>

```go
func EnableRateLimitResponseHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RateLimitExemptPathsInput`<sup>Optional</sup> <a name="RateLimitExemptPathsInput" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPathsInput"></a>

```go
func RateLimitExemptPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AbsoluteRateLimitExemptPaths`<sup>Required</sup> <a name="AbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.absoluteRateLimitExemptPaths"></a>

```go
func AbsoluteRateLimitExemptPaths() *[]*string
```

- *Type:* *[]*string

---

##### `EnableRateLimitAuditLogging`<sup>Required</sup> <a name="EnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitAuditLogging"></a>

```go
func EnableRateLimitAuditLogging() interface{}
```

- *Type:* interface{}

---

##### `EnableRateLimitResponseHeaders`<sup>Required</sup> <a name="EnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.enableRateLimitResponseHeaders"></a>

```go
func EnableRateLimitResponseHeaders() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RateLimitExemptPaths`<sup>Required</sup> <a name="RateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.rateLimitExemptPaths"></a>

```go
func RateLimitExemptPaths() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.quotaConfig.QuotaConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaConfigConfig <a name="QuotaConfigConfig" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/quotaconfig"

&quotaconfig.QuotaConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AbsoluteRateLimitExemptPaths: *[]*string,
	EnableRateLimitAuditLogging: interface{},
	EnableRateLimitResponseHeaders: interface{},
	Namespace: *string,
	RateLimitExemptPaths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths">AbsoluteRateLimitExemptPaths</a></code> | <code>*[]*string</code> | Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging">EnableRateLimitAuditLogging</a></code> | <code>interface{}</code> | Enables audit logging for requests rejected by rate limit quotas. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders">EnableRateLimitResponseHeaders</a></code> | <code>interface{}</code> | Enables rate limit response headers on HTTP responses. |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths">RateLimitExemptPaths</a></code> | <code>*[]*string</code> | Paths exempt from rate limit quotas relative to the current namespace context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbsoluteRateLimitExemptPaths`<sup>Optional</sup> <a name="AbsoluteRateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.absoluteRateLimitExemptPaths"></a>

```go
AbsoluteRateLimitExemptPaths *[]*string
```

- *Type:* *[]*string

Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy.

This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}

---

##### `EnableRateLimitAuditLogging`<sup>Optional</sup> <a name="EnableRateLimitAuditLogging" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitAuditLogging"></a>

```go
EnableRateLimitAuditLogging interface{}
```

- *Type:* interface{}

Enables audit logging for requests rejected by rate limit quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}

---

##### `EnableRateLimitResponseHeaders`<sup>Optional</sup> <a name="EnableRateLimitResponseHeaders" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.enableRateLimitResponseHeaders"></a>

```go
EnableRateLimitResponseHeaders interface{}
```

- *Type:* interface{}

Enables rate limit response headers on HTTP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#namespace QuotaConfig#namespace}

---

##### `RateLimitExemptPaths`<sup>Optional</sup> <a name="RateLimitExemptPaths" id="@cdktn/provider-vault.quotaConfig.QuotaConfigConfig.property.rateLimitExemptPaths"></a>

```go
RateLimitExemptPaths *[]*string
```

- *Type:* *[]*string

Paths exempt from rate limit quotas relative to the current namespace context.

This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}

---



