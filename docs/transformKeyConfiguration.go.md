# `transformKeyConfiguration` Submodule <a name="`transformKeyConfiguration` Submodule" id="@cdktn/provider-vault.transformKeyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformKeyConfiguration <a name="TransformKeyConfiguration" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration vault_transform_key_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

transformkeyconfiguration.NewTransformKeyConfiguration(scope Construct, id *string, config TransformKeyConfigurationConfig) TransformKeyConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig">TransformKeyConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig">TransformKeyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetAutoRotatePeriod"></a>

```go
func ResetAutoRotatePeriod()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetMinDecryptionVersion"></a>

```go
func ResetMinDecryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

transformkeyconfiguration.TransformKeyConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

transformkeyconfiguration.TransformKeyConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

transformkeyconfiguration.TransformKeyConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

transformkeyconfiguration.TransformKeyConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransformKeyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransformKeyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransformKeyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minAvailableVersion"></a>

```go
func MinAvailableVersion() *f64
```

- *Type:* *f64

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriodInput"></a>

```go
func AutoRotatePeriodInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersionInput"></a>

```go
func MinDecryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.autoRotatePeriod"></a>

```go
func AutoRotatePeriod() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.minDecryptionVersion"></a>

```go
func MinDecryptionVersion() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformKeyConfigurationConfig <a name="TransformKeyConfigurationConfig" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/transformkeyconfiguration"

&transformkeyconfiguration.TransformKeyConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	AutoRotatePeriod: *f64,
	Id: *string,
	MinDecryptionVersion: *f64,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path">Path</a></code> | <code>*string</code> | The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform". |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | Amount of time the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | Minimum key version that vault uses to decode values for the transform. |
| <code><a href="#@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#name TransformKeyConfiguration#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#path TransformKeyConfiguration#path}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.autoRotatePeriod"></a>

```go
AutoRotatePeriod *f64
```

- *Type:* *f64

Amount of time the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#auto_rotate_period TransformKeyConfiguration#auto_rotate_period}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.minDecryptionVersion"></a>

```go
MinDecryptionVersion *f64
```

- *Type:* *f64

Minimum key version that vault uses to decode values for the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#min_decryption_version TransformKeyConfiguration#min_decryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformKeyConfiguration.TransformKeyConfigurationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#namespace TransformKeyConfiguration#namespace}

---



